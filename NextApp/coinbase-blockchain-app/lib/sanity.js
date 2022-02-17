import SanityClientConstructor from '@sanity/client'
import sanityClient from '@sanity/client'

export const client = sanityClient(
    {
        projectId: 'rfllfi5a',
        dataset :'production',
        apiVersion: '2022-02-17',
        token: 'sk7qLQKP6uFQmc3uxf5Eb0lQWk8zx5UeLChlYMPAWjgZWBYscLgiJhZSbfppoLWqAFzTB1vqPLWXaNUuBE1V7qnTVfGM2IBZZXecwXh99THzkV2UYE5BFB5TqFLgC5IWYFleEmy03BrE8AdW307sreep0AyBMhKBKDJaBiXk7b19VAHEq6CI',
        useCdn: false
    }
)