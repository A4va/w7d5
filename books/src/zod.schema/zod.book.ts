import { TypeOf, z } from 'zod';

export const bookCheck = z.object({
    body: z.object({
      name: z.string({
        required_error: 'NAME IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    genre:z.string({
        required_error: 'GENRE IS REQUIRED !',
        invalid_type_error: 'IT MUST BE A STRING !'
    }),
    })
})

export type Registertypeschema = TypeOf<typeof bookCheck>["body"];


  
