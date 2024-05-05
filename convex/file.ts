import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const createFile = mutation({
    args: {
        name: v.string(),
    },
    async handler(ctx, args) {
        await ctx.db.insert('files', {
            name: args.name
        })
    },
})

export const getFiles = query({
    async handler(ctx, args) {
        return await ctx.db.query('files').collect()
    },
    args: {}
})