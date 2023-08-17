import { useFormContext } from "../../../contexts";
import { useCallback, useMemo, useState } from "react";
import { MachineImg } from "../../../../assets/images";

interface IResponseData {
  description: string;
  CAF: number;
}

export default function searchRetoolingOptions() {
  const { watchFields, setValue } = useFormContext();
  const [responseData, setResponseData] = useState<IResponseData[] | null>(
    null
  );

  const searchValue = watchFields["searchRetoolingOptions"];
  const retoolingItems = [
    {
      CAF: 701801000651,
      description: "MOLDE DE INJEÇÃO PU ANT. DO CARPETE P.521",
    },
    {
      CAF: 701801000652,
      description: "DISPOSITIVO DE SOLDA DIELÉTRICA DO CARPETE P.521",
    },
    {
      CAF: 701801000659,
      description: "DISPOSITIVO DE CONTROLE TPO  DO PORTA MALAS P.521",
    },
    {
      CAF: 701801000660,
      description: "DISPOSITIVO DE MONTAGEM TPO  DO PORTA MALAS P.521",
    },
    {
      CAF: 701801000665,
      description: "DISPOSITIVO DE CONTROLE ISOLAM. INNER DASH P.521",
    },
    {
      CAF: 701801000651,
      description: "MOLDE DE INJEÇÃO PU ANT. DO CARPETE P.521",
    },
    {
      CAF: 701801000652,
      description: "DISPOSITIVO DE SOLDA DIELÉTRICA DO CARPETE P.521",
    },
  ];

  const filteredData = retoolingItems?.filter(
    (item) =>
      item?.CAF === searchValue ||
      item?.description.includes(searchValue?.toUpperCase())
  );

  const handleFilterData = useCallback(() => {
    setResponseData(filteredData);
  }, []);

  useMemo(() => {
    if (searchValue) {
      setResponseData(filteredData);
    }
  }, [searchValue]);

  return {
    setResponseData,
    retoolingItems,
    handleFilterData,
    responseData,
  };
}
