/*
Zapier AI Actions API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  ActionApi,
  CheckApi,
  ConfigurationApi,
  LogApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { ZapierActionsCustom } from "./client-custom";

export class ZapierActions extends ZapierActionsCustom {
  readonly action: ActionApi;
  readonly check: CheckApi;
  readonly configuration: ConfigurationApi;
  readonly log: LogApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.action = new ActionApi(configuration);
    this.check = new CheckApi(configuration);
    this.configuration = new ConfigurationApi(configuration);
    this.log = new LogApi(configuration);
  }

}