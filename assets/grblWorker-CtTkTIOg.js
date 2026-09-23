self.onmessage=s=>{const e=s.data;e?.type==="configure"&&(self.__MOCK_GRBL_CONFIG__=e.config,import("./mock-grbl-core-Df2mnZ1r.js").then(()=>{self.postMessage({__workerReady:!0})}))};
