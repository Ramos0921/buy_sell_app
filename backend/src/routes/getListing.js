import { db } from '../database';
import Boom from '@hapi/boom'

export const getListingsRoute = {
  method:'GET',
  path:'/api/listings/{id}',
  handler: async (req,h)=>{
    const id = req.params.id;
    const { results } = await db.query('SELECT * FROM listings WHERE ID=?', [id],);
    const listing = results[0];
    if(!listing){
      throw Boom.notFound(`The requested listing with id ${id} does not exist`);
    }
    return listing;
  }
}