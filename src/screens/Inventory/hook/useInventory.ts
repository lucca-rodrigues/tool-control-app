import { useFormContext } from "../../../contexts";
import { useEffect, useMemo, useState } from "react";
import { getInventoryItemsService } from "../../../services/inventoryService";

interface IResponseData {
  caf: string;
  name: string;
  status: string;
  inventoryId: number;
  image?: string;
}

export default function inventoryHook() {
  const { watchFields } = useFormContext();

  const [currentTab, setCurrentTab] = useState(0);
  const [offset, setOffset] = useState(1);
  const [limitPages, setLimitPages] = useState(1);

  const [inventoryData, setInventoryData] = useState({
    performed: [],
    pending: [],
    analysis: [],
  });

  const id = 1;

  const [isLoading, setIsLoading] = useState(true);
  const searchPerformedValue = watchFields["searchPerformed"];
  const searchPendingValue = watchFields["searchPending"];
  const searchAnalysisValue = watchFields["searchAnalysis"];

  useMemo(() => {
    if (currentTab >= 0) {
      setOffset(1);
    }
  }, [currentTab]);

  async function getInventoryPerformedData() {
    const getStatus = "done";
    const data = await getInventoryItemsService(id, getStatus, offset);

    if (data?.status) {
      setInventoryData({
        ...inventoryData,
        performed: data?.result,
      });
      setLimitPages(data?.count);
      // setLimitPages(10);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  async function getInventoryPendingData() {
    // const getStatus = "pending";
    // const data = await getInventoryItemsService(id, getStatus, offset);
    // if (data?.status) {
    //   setInventoryData({ ...inventoryData, pending: data?.result });
    // }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  async function getInventoryAnalysisData() {
    // const getStatus = "analysis";
    // const data = await getInventoryItemsService(id, getStatus, offset);
    // if (data?.status) {
    //   setInventoryData({ ...inventoryData, analysis: data?.result });
    // }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  const filteredPerformedData =
    inventoryData.performed && searchPerformedValue
      ? inventoryData?.performed?.filter(
          (item: IResponseData) =>
            item?.caf.includes(searchPerformedValue) ||
            item?.name.includes(searchPerformedValue) ||
            item?.status.includes(searchPerformedValue)
        )
      : inventoryData.performed;

  const filteredpendingData =
    inventoryData.pending && searchPendingValue
      ? inventoryData?.pending?.filter(
          (item: IResponseData) =>
            item?.caf.includes(searchPendingValue) ||
            item?.name.includes(searchPendingValue) ||
            item?.status.includes(searchPendingValue)
        )
      : inventoryData.pending;

  const filteredAnalysisData =
    inventoryData.analysis && searchAnalysisValue
      ? inventoryData?.analysis?.filter(
          (item: IResponseData) =>
            item?.caf.includes(searchAnalysisValue) ||
            item?.name.includes(searchAnalysisValue) ||
            item?.status.includes(searchAnalysisValue)
        )
      : inventoryData.analysis;

  function handleChangeOffset(value: number) {
    setOffset(value);
  }

  function handleNextPage() {
    if (offset < limitPages) {
      setOffset(offset + 1);
    }
  }

  function handlePrevPage() {
    if (limitPages < offset && offset > 0) {
      setOffset(offset - 1);
    } else {
      setOffset(1);
    }
  }

  useEffect(() => {
    if (currentTab === 0) {
      getInventoryPerformedData();
    } else if (currentTab === 1) {
      getInventoryPendingData();
    } else if (currentTab === 2) {
      getInventoryAnalysisData();
    }
  }, [currentTab, offset]);

  return {
    inventoryData,
    filteredPerformedData,
    filteredpendingData,
    filteredAnalysisData,
    getInventoryPerformedData,
    getInventoryPendingData,
    getInventoryAnalysisData,
    isLoading,
    setCurrentTab,
    handleNextPage,
    handlePrevPage,
    offset,
    limitPages,
    handleChangeOffset,
    setIsLoading,
  };
}
