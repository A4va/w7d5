import { TypeOf, z } from 'zod';
enum Genre { 
    action = "action",
    comedy = "comedy",
    drama  = "drama" 
}

export const movieCheck = z.object({
    body: z.object({
        name: z.string({
            required_error: 'NAME IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A STRING !'
        }).min(2,"IT MUST BE MORE THAN 2 CHARACTERS !"),
        genre: z.nativeEnum(Genre, { required_error: "GENRE IS REQUIRED !" }),
        rating: z.number({
            required_error: 'NAME IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A NUMBER !'
        }).max(5, "MUST BE BETWEEN 1-5 !").min(1, "MUST BE BETWEEN 1-5 !"),
        duration: z.number({
            required_error: 'NAME IS REQUIRED !',
            invalid_type_error: 'IT MUST BE A NUMBER !'
        }).min(60, "MUST BE MORE THAN 60 MINUTES !"),
    })
})

export type Registertypeschema = TypeOf<typeof movieCheck>["body"];
