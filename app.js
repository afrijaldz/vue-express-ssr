import { createSSRApp } from "vue";

export function createApp() {
  return createSSRApp({
    data: () => ({ name: "", result: "" }),
    methods: {
      handleChangeName(e) {
        e.preventDefault();
        this.result = this.name;
        this.name = "";
      },
    },
    template: `
      <div class="w-screen h-screen bg-slate-100">
        <div class="flex justify-center items-center h-full">
          <div class="w-6/12 rounded p-14 bg-white shadow">
            <div class="text-center mb-4 text-xl">
              Input your name below
            </div>
            <div class="my-3 w-full text-center">
              <input class="border-black w-[300px] border rounded  p-3" v-model="name" placeholder="insert your name here" />
              <button class="ml-2 px-3 py-2 bg-green-500 focus:bg-green-600 text-white rounded" @click="handleChangeName">Submit</button>
            </div>
            <div class="text-center mt-6 text-2xl" v-if="result">
              Hello, <span class="font-bold">{{ result }}</span>
              <div>Don't forget to smile, Have a nice day !</div>
            </div>
          <div>
        </div>
      </div>
    `,
  });
}
