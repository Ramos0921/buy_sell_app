import Hapi from '@hapi/hapi';

const start = async () =>{
  const server = Hapi.server({
    port:8000,
    host:'localhost',
  })

  server.route({
    method:'GET',
    path:'/hello',
    handler:(req,h)=>{
      console.log('hi')
      return "hello"
    }
  })

  await server.start();
  console.log(`Server is listening on port ${server.info.uri}`)
}

process.on('unhandledRejection',err=>{
  console.log(err);
  process.exit(1);
});

start();