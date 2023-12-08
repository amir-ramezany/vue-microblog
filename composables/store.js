import { reactive } from "vue";
// class Store {
//   constructor() {
//     // const state = {};
//     this.state = reactive({
//       posts: [
//         {
//           id: 1,
//           title: "my post",
//           content: "this my post",
//         },
//       ],
//     });
//   }
// }
export const store = reactive({
  posts: [
    {
      id: 1,
      title: "my post",
      content: "this my post",
    },
  ],
});

// export const store = new Store();
