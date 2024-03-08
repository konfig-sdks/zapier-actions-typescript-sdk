/* tslint:disable */
/* eslint-disable */
/*
Zapier AI Actions API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CheckApi - axios parameter creator
 * @export
 */
export const CheckApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Test that the API and auth are working.
         * @summary Check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authTestGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/check`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessPointApiKeyHeader required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "X-API-Key", keyParamName: "accessPointApiKeyHeader", configuration })
            // authentication AccessPointApiKeyQuery required
            await setApiKeyToObject({object: localVarQueryParameter, key: "api_key", keyParamName: "accessPointApiKeyQuery", configuration})
            // authentication AccessPointOAuth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "AccessPointOAuth", [], configuration)
            // authentication SessionAuth required
            await setApiKeyToObject({object: localVarHeaderParameter, type: "Cookie", key: "Cookie", keyParamName: "nlasession", configuration})

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/v1/check',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CheckApi - functional programming interface
 * @export
 */
export const CheckApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CheckApiAxiosParamCreator(configuration)
    return {
        /**
         * Test that the API and auth are working.
         * @summary Check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authTestGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authTestGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CheckApi - factory interface
 * @export
 */
export const CheckApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CheckApiFp(configuration)
    return {
        /**
         * Test that the API and auth are working.
         * @summary Check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authTestGet(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.authTestGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CheckApiGenerated - object-oriented interface
 * @export
 * @class CheckApiGenerated
 * @extends {BaseAPI}
 */
export class CheckApiGenerated extends BaseAPI {
    /**
     * Test that the API and auth are working.
     * @summary Check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CheckApiGenerated
     */
    public authTestGet(options?: AxiosRequestConfig) {
        return CheckApiFp(this.configuration).authTestGet(options).then((request) => request(this.axios, this.basePath));
    }
}
