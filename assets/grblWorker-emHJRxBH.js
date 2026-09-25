self.onmessage=s=>{const e=s.data;e?.type==="configure"&&(self.__MOCK_GRBL_CONFIG__=e.config,import("./mock-grbl-core-CHyZq6CL.js").then(()=>{self.postMessage({__workerReady:!0})}))};
