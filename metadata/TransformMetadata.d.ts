import { TransformOptions } from "./ExposeExcludeOptions";
import { TransformationType } from "../TransformationType";
export declare class TransformMetadata {
    target: Function;
    propertyName: string;
    transformFn: (value: any, obj: any, transformationType: TransformationType) => any;
    options: TransformOptions;
    constructor(target: Function, propertyName: string, transformFn: (value: any, obj: any, transformationType: TransformationType) => any, options: TransformOptions);
}
