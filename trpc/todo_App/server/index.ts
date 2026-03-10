import { publicProcedure, router } from './trpc.js';
import { z } from "zod"
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoSchema = z.object({
  title: z.string(),
  desctription: z.string()
})


export const appRouter = router({
  createTodo: publicProcedure
    .input(todoSchema)
    .mutation(async (opts) => {
      const title = opts.input.title
      const desctription = opts.input.desctription

      return {
        id: "1"
      }
    })

  //db stuff here 

});
const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
export type AppRouter = typeof appRouter;
