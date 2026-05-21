const {z} = require('zod')
const { de } = require('zod/v4/locales')

const createAreasSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    description: z.string().optional(),
})

const updateAreasSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    description: z.string().optional(),
    
})

module.exports = { createAreasSchema, updateAreasSchema }

