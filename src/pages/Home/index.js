// src/pages/Home/index.jsx (or wherever your wrapper is)
import React, { lazy, Suspense } from "react";
import Loading from "../../components/shared/Loading/Loading";

// Lazy import Home.js (default export required ✅)
const LazyLoaded = lazy(() => import("./Home/Home"));

function HomeWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyLoaded />
    </Suspense>
  );
}

export default HomeWrapper;