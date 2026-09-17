import { HydratedDocument } from 'mongoose';
export type CatDocument = HydratedDocument<Cat>;
export declare class Cat {
    name: string;
    age: number;
    breed: string;
}
export declare const CatSchema: import("mongoose").Schema<Cat, import("mongoose").Model<Cat, any, any, any, any, any, Cat>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cat, import("mongoose").Document<unknown, {}, Cat, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Cat & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>, {
    name?: import("mongoose").SchemaDefinitionProperty<string, Cat, import("mongoose").Document<unknown, {}, Cat, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    age?: import("mongoose").SchemaDefinitionProperty<number, Cat, import("mongoose").Document<unknown, {}, Cat, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
    breed?: import("mongoose").SchemaDefinitionProperty<string, Cat, import("mongoose").Document<unknown, {}, Cat, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Cat & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>> | undefined;
}, Cat>;
