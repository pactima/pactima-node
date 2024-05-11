/* tslint:disable */
/* eslint-disable */


import { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';

export const BASE_PATH = "https://rest.api.pactima.com/v1".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: RawAxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined;
    protected axios: AxiosInstance = globalAxios;
    protected basePath: string = BASE_PATH;

    constructor(accessToken: string) {
        this.configuration = new Configuration({ accessToken });
    }

};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
        this.name = "RequiredError"
    }
}

interface ServerMap {
    [key: string]: {
        url: string,
        description: string,
    }[];
}

/**
 *
 * @export
 */
export const operationServerMap: ServerMap = {
    "PactimaApi.eSignaturePackagesAttachmentsCreate": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.eSignaturePackagesDocumentsCreate": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.eSignaturePackagesDocumentsUpdate": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.eSignatureTemplatesDocumentsCreate": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.eSignatureTemplatesDocumentsUpdate": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.identityVerificationsSubmitDocument": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.identityVerificationsUploadLiveness": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
    "PactimaApi.identityVerificationsUploadSelfie": [
        {
            url: "https://files.api.pactima.com/v1",
            description: "No description provided",
        }
    ],
}
