export const resolvers = {
    Query: {
        user(_, args) {
            return {
                id: args.id,
                email: 'email',
                password: 'passs',
                username: 'username'
            };
        }
    }
};
