export function getOrderStatus(status) {
  switch (status) {
    case "PLACED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-sky-500">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    case "PROCESSING":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-blue-800">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    case "CONFIRMED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-orange-500">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    case "SHIPPED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-black">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    case "OUT_FOR_DELIVERY":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-yellow-500">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    case "DELIVERED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-green-500">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    case "CANCELLED":
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-red-700">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
    default:
      return (
        <span className="capitalize py-1 px-2 rounded-md text-xs text-white bg-gray-500">
          {status.replaceAll("_", "").toLowerCase()}
        </span>
      );
  }
}
