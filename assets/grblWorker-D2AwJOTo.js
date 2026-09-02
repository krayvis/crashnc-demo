self.onmessage=s=>{const e=s.data;e?.type==="configure"&&(self.__MOCK_GRBL_CONFIG__=e.config,import("./mock-grbl-core-BFU_r3jx.js").then(()=>{self.postMessage({__workerReady:!0})}))};
