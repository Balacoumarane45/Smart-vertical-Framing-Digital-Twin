
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";

export interface SoilMoistureData {
  rack_id: string;
  shelf_id: string;
  moisture_level: number;
  temperature: number | null;
}

export const useSoilMoisture = () => {
  const [moistureData, setMoistureData] = useState<SoilMoistureData[]>([]);

  useEffect(() => {
    // Initial fetch of soil moisture data
    const fetchMoistureData = async () => {
      const { data, error } = await supabase
        .from("soil_moisture")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching soil moisture data:", error);
        return;
      }

      setMoistureData(data);
    };

    fetchMoistureData();

    // Set up real-time subscription
    const channel: RealtimeChannel = supabase
      .channel("soil-moisture-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "soil_moisture",
        },
        (payload) => {
          // Update the moisture data when new data comes in
          fetchMoistureData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return moistureData;
};
