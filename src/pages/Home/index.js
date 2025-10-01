import React, { lazy, Suspense } from "react";
import Loading from "../../components/shared/Loading/Loading";

const LazyLoaded = lazy(() => import("./home.js"));

function HomeWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLoaded />
    </Suspense>
  );
}

export default HomeWrapper;