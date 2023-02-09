
// const verifyAccessToken: Middleware = async ({redirect, route, query, $api, store, next}: Context) => {

//   if(route.path !== '/unauthorized' && route.path !== '/'){
//     const token = query.access_token as string;
//     console.log(token ? `token: ${token}` : "no access token");
//     if(!token) redirect('/unauthorized');
//     $api.$axios.setToken(token, 'Bearer');
//     if(process.server){
//         try {
//           console.log("verify on server")
//           const data = await $api.verify();
//           store.commit('user/SET_USER', data.user);
//           store.commit('user/SET_TOKEN', token);
//         } catch (error) {
//             console.error(error);
//             redirect('/unauthorized');
//         }
//     } else {
//       try {
//         console.log("verify on client");
//         await $api.verify();
//       } catch (error) {
//         console.error(error);
//         redirect('/unauthorized');
//       }
//     }
//   }
// }

// export default verifyAccessToken;