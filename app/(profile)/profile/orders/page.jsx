import React from "react";
import OrdersTable from "../../../../components/OrdersTable";

const Orders = () => {
  return (
    <main className="mt-7 w-full mx-8 overflow-x-auto ">
      <OrdersTable title="سفارشات شما" />
    </main>
  );
};

export default Orders;
