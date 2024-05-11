/* tslint:disable */
/* eslint-disable */


import type { Configuration } from "./configuration";
import type { RequestArgs } from "./base";
import type { AxiosInstance, AxiosResponse } from 'axios';
import { RequiredError } from "./base";
import { URL, URLSearchParams } from 'url';

/**
 *
 * @export
 */
export const DUMMY_BASE_URL = 'https://example.com'

/**
 *
 * @throws {RequiredError}
 * @export
 */
export const assertParamExists = function (functionName: string, paramName: string, paramValue: unknown) {
    if (paramValue === null || paramValue === undefined) {
        throw new RequiredError(paramName, `Required parameter ${paramName} was null or undefined when calling ${functionName}.`);
    }
}

/**
 *
 * @export
 */
export const setApiKeyToObject = async function (object: any, keyParamName: string, configuration?: Configuration) {
    if (configuration && configuration.apiKey) {
        const localVarApiKeyValue = typeof configuration.apiKey === 'function'
            ? await configuration.apiKey(keyParamName)
            : await configuration.apiKey;
        object[keyParamName] = localVarApiKeyValue;
    }
}

/**
 *
 * @export
 */
export const setBasicAuthToObject = function (object: any, configuration?: Configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
}

/**
 *
 * @export
 */
export const setBearerAuthToObject = async function (object: any, configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const accessToken = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken()
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + accessToken;
    }
}

/**
 *
 * @export
 */
export const setOAuthToObject = async function (object: any, name: string, scopes: string[], configuration?: Configuration) {
    if (configuration && configuration.accessToken) {
        const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
            ? await configuration.accessToken(name, scopes)
            : await configuration.accessToken;
        object["Authorization"] = "Bearer " + localVarAccessTokenValue;
    }
}

function setFlattenedQueryParams(urlSearchParams: URLSearchParams, parameter: any, key: string = ""): void {
    if (parameter == null) return;
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            (parameter as any[]).forEach(item => setFlattenedQueryParams(urlSearchParams, item, key));
        } 
        else {
            Object.keys(parameter).forEach(currentKey => 
                setFlattenedQueryParams(urlSearchParams, parameter[currentKey], `${key}${key !== '' ? '.' : ''}${currentKey}`)
            );
        }
    } 
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        } 
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}

/**
 *
 * @export
 */
export const setSearchParams = function (url: URL, ...objects: any[]) {
    const searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
}

/**
 *
 * @export
 */
export const serializeDataIfNeeded = function (value: any, requestOptions: any, configuration?: Configuration) {
    const nonString = typeof value !== 'string';
    const needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? convertMapsAndSetsToPlain(value) : {})
        : (value || "");
}

function convertMapsAndSetsToPlain(value: any): any {
    if (typeof Set === "undefined") return value;
    if (typeof Map === "undefined") return value;
    if (typeof value !== "object" || !value) {
        return value;
    }
    if (value instanceof Set) {
        return Array.from(value).map(item => convertMapsAndSetsToPlain(item));
    }
    if (value instanceof Map) {
        const entries: Array<[string, any]> = [];
        value.forEach((value: any, key: any) => {
            entries.push([key, convertMapsAndSetsToPlain(value)])
        });
        return objectFromEntries(entries);
    }
    if (Array.isArray(value)) {
        return value.map(it => convertMapsAndSetsToPlain(it));
    }
    return objectFromEntries(objectEntries(value)
        .map(([k, v]) => [k, convertMapsAndSetsToPlain(v)]));
}

/**
 * Ponyfill for Object.entries
 */
function objectEntries(object: Record<string, any>): Array<[string, any]> {
    return Object.keys(object).map(key => [key, object[key]]);
}

/**
 * Ponyfill for Object.fromEntries
 */
function objectFromEntries(entries: any): Record<string, any> {
    return [...entries].reduce((object, [key, val]) => {
        object[key] = val;
        return object;
    }, {});
}

/**
 *
 * @export
 */
export const toPathString = function (url: URL) {
    return url.pathname + url.search + url.hash
}

/**
 *
 * @export
 */
export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) {
    return <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = {...axiosArgs.options, url: (axios.defaults.baseURL ? '' : configuration?.basePath ?? basePath) + axiosArgs.url};
        return axios.request<T, R>(axiosRequestArgs);
    };
}
