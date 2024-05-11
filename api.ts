/* tslint:disable */
/* eslint-disable */

import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
import * as FormData from 'form-data';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from './base';
import { ReadStream } from 'fs';

/**
 *
 * @export
 * @enum {string}
 */

export const ENotaryAuthTypeEnum = {
  Idv: 'IDV',
  Kba: 'KBA',
  VulnerabilityScreening: 'VULNERABILITY_SCREENING',
  LocationVerification: 'LOCATION_VERIFICATION',
} as const;

export type ENotaryAuthTypeEnum =
  (typeof ENotaryAuthTypeEnum)[keyof typeof ENotaryAuthTypeEnum];

/**
 *
 * @export
 * @interface ENotaryPackage
 */
export interface ENotaryPackage {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackage
   */
  id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ENotaryPackage
   */
  isTestMode?: boolean;
  /**
   * Id of the owner of the eNotary package. Owner must be a valid notary, and a signer in the package.
   * @type {string}
   * @memberof ENotaryPackage
   */
  ownerId?: string;
  /**
   * Id of the respective Live eSignature
   * @type {string}
   * @memberof ENotaryPackage
   */
  eSignaturePackageId?: string;
  /**
   *
   * @type {Array<ENotaryPackageValidationRequest>}
   * @memberof ENotaryPackage
   */
  validationRequests?: Array<ENotaryPackageValidationRequest>;
  /**
   *
   * @type {Array<ENotaryPackageValidationResponse>}
   * @memberof ENotaryPackage
   */
  validationResponses?: Array<ENotaryPackageValidationResponse>;
  /**
   *
   * @type {ENotaryPackageJournal}
   * @memberof ENotaryPackage
   */
  journal?: ENotaryPackageJournal;
}
/**
 *
 * @export
 * @interface ENotaryPackageJournal
 */
export interface ENotaryPackageJournal {
  /**
   *
   * @type {Array<ENotaryPackageJournalEntry>}
   * @memberof ENotaryPackageJournal
   */
  entries?: Array<ENotaryPackageJournalEntry>;
  /**
   *
   * @type {Array<ENotaryPackageJournalMetadataItem>}
   * @memberof ENotaryPackageJournal
   */
  metadataItems?: Array<ENotaryPackageJournalMetadataItem>;
}
/**
 *
 * @export
 * @interface ENotaryPackageJournalAuditInfo
 */
export interface ENotaryPackageJournalAuditInfo {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalAuditInfo
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalAuditInfo
   */
  date?: string;
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalAuditInfo
   */
  initiator?: string;
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalAuditInfo
   */
  ipAddress?: string;
}
/**
 *
 * @export
 * @interface ENotaryPackageJournalEntry
 */
export interface ENotaryPackageJournalEntry {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalEntry
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalEntry
   */
  description?: string;
  /**
   *
   * @type {ESignatureAttachment}
   * @memberof ENotaryPackageJournalEntry
   */
  attachments?: ESignatureAttachment;
  /**
   *
   * @type {Array<ENotaryPackageJournalEntryAffectParticipant>}
   * @memberof ENotaryPackageJournalEntry
   */
  affectedParticipants?: Array<ENotaryPackageJournalEntryAffectParticipant>;
  /**
   *
   * @type {ENotaryPackageJournalAuditInfo}
   * @memberof ENotaryPackageJournalEntry
   */
  auditInfo?: ENotaryPackageJournalAuditInfo;
}
/**
 *
 * @export
 * @interface ENotaryPackageJournalEntryAffectParticipant
 */
export interface ENotaryPackageJournalEntryAffectParticipant {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalEntryAffectParticipant
   */
  id?: string;
}
/**
 *
 * @export
 * @interface ENotaryPackageJournalMetadataItem
 */
export interface ENotaryPackageJournalMetadataItem {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalMetadataItem
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalMetadataItem
   */
  label?: string;
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageJournalMetadataItem
   */
  value?: string;
  /**
   *
   * @type {ENotaryPackageJournalAuditInfo}
   * @memberof ENotaryPackageJournalMetadataItem
   */
  auditInfo?: ENotaryPackageJournalAuditInfo;
}
/**
 *
 * @export
 * @interface ENotaryPackageValidationRequest
 */
export interface ENotaryPackageValidationRequest {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageValidationRequest
   */
  signerId?: string;
  /**
   *
   * @type {ENotaryPackageValidationRequestIdv}
   * @memberof ENotaryPackageValidationRequest
   */
  idv?: ENotaryPackageValidationRequestIdv;
  /**
   *
   * @type {ENotaryPackageValidationRequestKba}
   * @memberof ENotaryPackageValidationRequest
   */
  kba?: ENotaryPackageValidationRequestKba;
  /**
   *
   * @type {ENotaryPackageValidationRequestLocationVerification}
   * @memberof ENotaryPackageValidationRequest
   */
  locationVerification?: ENotaryPackageValidationRequestLocationVerification;
  /**
   *
   * @type {ENotaryPackageValidationRequestVulnerabilityScreening}
   * @memberof ENotaryPackageValidationRequest
   */
  vulnerabilityScreening?: ENotaryPackageValidationRequestVulnerabilityScreening;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ENotaryPackageValidationRequestEnforcementCriterionEnum = {
  Required: 'REQUIRED',
  Optional: 'OPTIONAL',
  Skip: 'SKIP',
} as const;

export type ENotaryPackageValidationRequestEnforcementCriterionEnum =
  (typeof ENotaryPackageValidationRequestEnforcementCriterionEnum)[keyof typeof ENotaryPackageValidationRequestEnforcementCriterionEnum];

/**
 *
 * @export
 * @interface ENotaryPackageValidationRequestIdv
 */
export interface ENotaryPackageValidationRequestIdv {
  /**
   *
   * @type {ENotaryPackageValidationRequestEnforcementCriterionEnum}
   * @memberof ENotaryPackageValidationRequestIdv
   */
  enforcementCriterion?: ENotaryPackageValidationRequestEnforcementCriterionEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackageValidationRequestKba
 */
export interface ENotaryPackageValidationRequestKba {
  /**
   *
   * @type {ENotaryPackageValidationRequestEnforcementCriterionEnum}
   * @memberof ENotaryPackageValidationRequestKba
   */
  enforcementCriterion?: ENotaryPackageValidationRequestEnforcementCriterionEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackageValidationRequestLocationVerification
 */
export interface ENotaryPackageValidationRequestLocationVerification {
  /**
   *
   * @type {ENotaryPackageValidationRequestEnforcementCriterionEnum}
   * @memberof ENotaryPackageValidationRequestLocationVerification
   */
  enforcementCriterion?: ENotaryPackageValidationRequestEnforcementCriterionEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackageValidationRequestVulnerabilityScreening
 */
export interface ENotaryPackageValidationRequestVulnerabilityScreening {
  /**
   *
   * @type {ENotaryPackageValidationRequestEnforcementCriterionEnum}
   * @memberof ENotaryPackageValidationRequestVulnerabilityScreening
   */
  enforcementCriterion?: ENotaryPackageValidationRequestEnforcementCriterionEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackageValidationResponse
 */
export interface ENotaryPackageValidationResponse {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackageValidationResponse
   */
  signerId?: string;
  /**
   *
   * @type {ENotaryPackageValidationResponseIdv}
   * @memberof ENotaryPackageValidationResponse
   */
  idv?: ENotaryPackageValidationResponseIdv;
  /**
   *
   * @type {ENotaryPackageValidationResponseKba}
   * @memberof ENotaryPackageValidationResponse
   */
  kba?: ENotaryPackageValidationResponseKba;
  /**
   *
   * @type {ENotaryPackageValidationResponseLocationVerification}
   * @memberof ENotaryPackageValidationResponse
   */
  locationVerification?: ENotaryPackageValidationResponseLocationVerification;
  /**
   *
   * @type {ENotaryPackageValidationResponseVulnerabilityScreening}
   * @memberof ENotaryPackageValidationResponse
   */
  vulnerabilityScreening?: ENotaryPackageValidationResponseVulnerabilityScreening;
}
/**
 *
 * @export
 * @interface ENotaryPackageValidationResponseIdv
 */
export interface ENotaryPackageValidationResponseIdv {
  /**
   * Id of the Identity Verification Package
   * @type {string}
   * @memberof ENotaryPackageValidationResponseIdv
   */
  id?: string;
  /**
   *
   * @type {ENotaryPackageValidationResponseOutcomeEnum}
   * @memberof ENotaryPackageValidationResponseIdv
   */
  outcome?: ENotaryPackageValidationResponseOutcomeEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackageValidationResponseKba
 */
export interface ENotaryPackageValidationResponseKba {
  /**
   * Id of the KBA package
   * @type {string}
   * @memberof ENotaryPackageValidationResponseKba
   */
  id?: string;
  /**
   *
   * @type {ENotaryPackageValidationResponseOutcomeEnum}
   * @memberof ENotaryPackageValidationResponseKba
   */
  outcome?: ENotaryPackageValidationResponseOutcomeEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackageValidationResponseLocationVerification
 */
export interface ENotaryPackageValidationResponseLocationVerification {
  /**
   * Id of the Location Verification package
   * @type {string}
   * @memberof ENotaryPackageValidationResponseLocationVerification
   */
  id?: string;
  /**
   *
   * @type {ENotaryPackageValidationResponseOutcomeEnum}
   * @memberof ENotaryPackageValidationResponseLocationVerification
   */
  outcome?: ENotaryPackageValidationResponseOutcomeEnum;
}

/**
 *
 * @export
 * @enum {string}
 */

export const ENotaryPackageValidationResponseOutcomeEnum = {
  Passed: 'PASSED',
  Failed: 'FAILED',
  Skipped: 'SKIPPED',
} as const;

export type ENotaryPackageValidationResponseOutcomeEnum =
  (typeof ENotaryPackageValidationResponseOutcomeEnum)[keyof typeof ENotaryPackageValidationResponseOutcomeEnum];

/**
 *
 * @export
 * @interface ENotaryPackageValidationResponseVulnerabilityScreening
 */
export interface ENotaryPackageValidationResponseVulnerabilityScreening {
  /**
   * Id of the Vulnerability Screening package
   * @type {string}
   * @memberof ENotaryPackageValidationResponseVulnerabilityScreening
   */
  id?: string;
  /**
   *
   * @type {ENotaryPackageValidationResponseOutcomeEnum}
   * @memberof ENotaryPackageValidationResponseVulnerabilityScreening
   */
  outcome?: ENotaryPackageValidationResponseOutcomeEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackagesActionsResetAuthenticationParams
 */
export interface ENotaryPackagesActionsResetAuthenticationParams {
  /**
   * List of signer ids to reset authentication
   * @type {Array<string>}
   * @memberof ENotaryPackagesActionsResetAuthenticationParams
   */
  signerIds?: Array<string>;
  /**
   * List of authentication types to reset
   * @type {Array<ENotaryAuthTypeEnum>}
   * @memberof ENotaryPackagesActionsResetAuthenticationParams
   */
  authTypes?: Array<ENotaryAuthTypeEnum>;
}
/**
 *
 * @export
 * @interface ENotaryPackagesCreateParams
 */
export interface ENotaryPackagesCreateParams {
  /**
   *
   * @type {string}
   * @memberof ENotaryPackagesCreateParams
   */
  ownerId?: string;
  /**
   * Id of the eSignature package to link. Must have the same owner and be in DRAFT status
   * @type {string}
   * @memberof ENotaryPackagesCreateParams
   */
  eSignaturePackageId?: string;
  /**
   *
   * @type {ESignatureKindEnum}
   * @memberof ENotaryPackagesCreateParams
   */
  eSignaturePackageKind?: ESignatureKindEnum;
}

/**
 *
 * @export
 * @interface ENotaryPackagesListResponse
 */
export interface ENotaryPackagesListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ENotaryPackagesListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ENotaryPackage>}
   * @memberof ENotaryPackagesListResponse
   */
  data?: Array<ENotaryPackage>;
}
/**
 *
 * @export
 * @interface ENotaryPackagesUpdateParams
 */
export interface ENotaryPackagesUpdateParams {
  /**
   *
   * @type {Array<ENotaryPackageValidationRequest>}
   * @memberof ENotaryPackagesUpdateParams
   */
  validationRequests?: Array<ENotaryPackageValidationRequest>;
}
/**
 *
 * @export
 * @interface ENotaryPackagesValidationRequestsUpdateParams
 */
export interface ENotaryPackagesValidationRequestsUpdateParams {
  /**
   *
   * @type {ENotaryPackageValidationRequestIdv}
   * @memberof ENotaryPackagesValidationRequestsUpdateParams
   */
  idv?: ENotaryPackageValidationRequestIdv;
  /**
   *
   * @type {ENotaryPackageValidationRequestKba}
   * @memberof ENotaryPackagesValidationRequestsUpdateParams
   */
  kba?: ENotaryPackageValidationRequestKba;
  /**
   *
   * @type {ENotaryPackageValidationRequestLocationVerification}
   * @memberof ENotaryPackagesValidationRequestsUpdateParams
   */
  locationVerification?: ENotaryPackageValidationRequestLocationVerification;
}
/**
 *
 * @export
 * @interface ESignatureAdvancedOptions
 */
export interface ESignatureAdvancedOptions {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureAdvancedOptions
   */
  disableRepeatEntries?: boolean;
  /**
   *
   * @type {ESignaturePenColorEnum}
   * @memberof ESignatureAdvancedOptions
   */
  penColor?: ESignaturePenColorEnum;
  /**
   *
   * @type {Array<SignatureTypeEnum>}
   * @memberof ESignatureAdvancedOptions
   */
  signatureTypes?: Array<SignatureTypeEnum>;
  /**
   * Settings for notification regarding this eSignature package
   * @type {Array<ESignatureAdvancedOptionsNotificationItem>}
   * @memberof ESignatureAdvancedOptions
   */
  notifications?: Array<ESignatureAdvancedOptionsNotificationItem>;
  /**
   * Settings for exit redirect uri for this eSignature package
   * @type {Array<ESignatureAdvancedOptionsExitRedirectUriConfigItem>}
   * @memberof ESignatureAdvancedOptions
   */
  exitRedirectUriConfigurations?: Array<ESignatureAdvancedOptionsExitRedirectUriConfigItem>;
  /**
   * Reset the eNotary authentication at each entry
   * @type {boolean}
   * @memberof ESignatureAdvancedOptions
   */
  resetENotaryAuthAtEntry?: boolean;
  /**
   * Cancel the eSignature package if one of the eNotary validation fails
   * @type {boolean}
   * @memberof ESignatureAdvancedOptions
   */
  cancelAtENotaryAuthFailure?: boolean;
  /**
   *
   * @type {InlineWebhook}
   * @memberof ESignatureAdvancedOptions
   */
  inlineWebhook?: InlineWebhook;
}

/**
 *
 * @export
 * @interface ESignatureAdvancedOptionsExitRedirectUriConfigItem
 */
export interface ESignatureAdvancedOptionsExitRedirectUriConfigItem {
  /**
   * URI when the participant is exiting the signing ceremony
   * @type {string}
   * @memberof ESignatureAdvancedOptionsExitRedirectUriConfigItem
   */
  redirectUri?: string;
  /**
   *
   * @type {ESignatureAdvancedOptionsExitRedirectUriConfigItemParticipantId}
   * @memberof ESignatureAdvancedOptionsExitRedirectUriConfigItem
   */
  participantId?: ESignatureAdvancedOptionsExitRedirectUriConfigItemParticipantId;
}
/**
 * @type ESignatureAdvancedOptionsExitRedirectUriConfigItemParticipantId
 * @export
 */
export type ESignatureAdvancedOptionsExitRedirectUriConfigItemParticipantId =
  | ESignatureParticipantTypeEnum
  | string;

/**
 *
 * @export
 * @interface ESignatureAdvancedOptionsNotificationItem
 */
export interface ESignatureAdvancedOptionsNotificationItem {
  /**
   *
   * @type {ESignatureAdvancedOptionsNotificationItemEvent}
   * @memberof ESignatureAdvancedOptionsNotificationItem
   */
  event?: ESignatureAdvancedOptionsNotificationItemEvent;
  /**
   *
   * @type {ESignatureAdvancedOptionsNotificationItemParticipantId}
   * @memberof ESignatureAdvancedOptionsNotificationItem
   */
  participantId?: ESignatureAdvancedOptionsNotificationItemParticipantId;
  /**
   *
   * @type {boolean}
   * @memberof ESignatureAdvancedOptionsNotificationItem
   */
  enabled?: boolean;
}
/**
 * @type ESignatureAdvancedOptionsNotificationItemEvent
 * @export
 */
export type ESignatureAdvancedOptionsNotificationItemEvent =
  | ESignatureEventEnum
  | string;

/**
 * @type ESignatureAdvancedOptionsNotificationItemParticipantId
 * This is the signerId, ownerId, or agreemaId of (essentially their participant id), Special participant IDs include, SIGNERS.ALL, which applies to all singers.
 * @export
 */
export type ESignatureAdvancedOptionsNotificationItemParticipantId =
  | ESignatureSpecialParticipantEnum
  | string;

/**
 *
 * @export
 * @interface ESignatureAttachment
 */
export interface ESignatureAttachment {
  /**
   *
   * @type {string}
   * @memberof ESignatureAttachment
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureAttachment
   */
  filename: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureAttachment
   */
  filetype: string;
  /**
   *
   * @type {boolean}
   * @memberof ESignatureAttachment
   */
  isConfidential?: boolean;
  /**
   * Public id or signer
   * @type {string}
   * @memberof ESignatureAttachment
   */
  ownerId: string;
  /**
   * Id of the attachment request id that this fulfills
   * @type {string}
   * @memberof ESignatureAttachment
   */
  requestId?: string;
}
/**
 *
 * @export
 * @interface ESignatureCCRecipient
 */
export interface ESignatureCCRecipient {
  /**
   *
   * @type {string}
   * @memberof ESignatureCCRecipient
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureCCRecipient
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureCCRecipient
   */
  email: string;
  /**
   *
   * @type {Array<ESignatureCCRecipientSpecialRoleEnum>}
   * @memberof ESignatureCCRecipient
   */
  specialRoles?: Array<ESignatureCCRecipientSpecialRoleEnum>;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureCCRecipientSpecialRoleEnum = {
  Observer: 'OBSERVER',
  ObserverOnly: 'OBSERVER_ONLY',
} as const;

export type ESignatureCCRecipientSpecialRoleEnum =
  (typeof ESignatureCCRecipientSpecialRoleEnum)[keyof typeof ESignatureCCRecipientSpecialRoleEnum];

/**
 *
 * @export
 * @interface ESignatureDocument
 */
export interface ESignatureDocument {
  /**
   *
   * @type {string}
   * @memberof ESignatureDocument
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureDocument
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof ESignatureDocument
   */
  pageCount?: number;
  /**
   *
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignatureDocument
   */
  entryPads?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignatureEntryPad
 */
export interface ESignatureEntryPad {
  /**
   *
   * @type {string}
   * @memberof ESignatureEntryPad
   */
  id?: string;
  /**
   * Id of the signer
   * @type {string}
   * @memberof ESignatureEntryPad
   */
  signerId: string;
  /**
   *
   * @type {ESignatureEntryPadTypeEnum}
   * @memberof ESignatureEntryPad
   */
  type: ESignatureEntryPadTypeEnum;
  /**
   * Offset from the left. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureEntryPad
   */
  left: number;
  /**
   * Offset from the top. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureEntryPad
   */
  top: number;
  /**
   * Height of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureEntryPad
   */
  height: number;
  /**
   * Width of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureEntryPad
   */
  width: number;
  /**
   * Page index whereby the entry pad is contained in the document.
   * @type {number}
   * @memberof ESignatureEntryPad
   */
  pageIndex: number;
  /**
   * Set to true if the entry pad is optional.
   * @type {boolean}
   * @memberof ESignatureEntryPad
   */
  isOptional?: boolean;
  /**
   *
   * @type {any}
   * @memberof ESignatureEntryPad
   */
  metadata?: any;
}

/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureEntryPadTypeEnum = {
  Signature: 'signature',
  Initials: 'initials',
  Stamp: 'stamp',
  Date: 'date',
  Text: 'text',
  Checkbox: 'checkbox',
  Name: 'name',
  NotaryPublicProfileInfo: 'notary_public_profile_info',
  Email: 'email',
} as const;

export type ESignatureEntryPadTypeEnum =
  (typeof ESignatureEntryPadTypeEnum)[keyof typeof ESignatureEntryPadTypeEnum];

/**
 *
 * @export
 * @interface ESignatureEntryPadsCheckboxGroup
 */
export interface ESignatureEntryPadsCheckboxGroup {
  /**
   *
   * @type {string}
   * @memberof ESignatureEntryPadsCheckboxGroup
   */
  id?: string;
  /**
   *
   * @type {Array<ESignatureEntryPadsCheckboxGroupEntryPadListInner>}
   * @memberof ESignatureEntryPadsCheckboxGroup
   */
  entryPadList?: Array<ESignatureEntryPadsCheckboxGroupEntryPadListInner>;
  /**
   *
   * @type {boolean}
   * @memberof ESignatureEntryPadsCheckboxGroup
   */
  allowMultipleResponses?: boolean;
  /**
   *
   * @type {ESignatureEntryPadsCheckboxGroupPresentationTypeEnum}
   * @memberof ESignatureEntryPadsCheckboxGroup
   */
  presentationType?: ESignatureEntryPadsCheckboxGroupPresentationTypeEnum;
}

/**
 *
 * @export
 * @interface ESignatureEntryPadsCheckboxGroupEntryPadListInner
 */
export interface ESignatureEntryPadsCheckboxGroupEntryPadListInner {
  /**
   *
   * @type {string}
   * @memberof ESignatureEntryPadsCheckboxGroupEntryPadListInner
   */
  entryPadId?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureEntryPadsCheckboxGroupEntryPadListInner
   */
  label?: string;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureEntryPadsCheckboxGroupPresentationTypeEnum = {
  Buttons: 'BUTTONS',
  Dropdown: 'DROPDOWN',
  List: 'LIST',
} as const;

export type ESignatureEntryPadsCheckboxGroupPresentationTypeEnum =
  (typeof ESignatureEntryPadsCheckboxGroupPresentationTypeEnum)[keyof typeof ESignatureEntryPadsCheckboxGroupPresentationTypeEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureEventEnum = {
  Activated: 'ACTIVATED',
  Cancelled: 'CANCELLED',
  Redrafted: 'REDRAFTED',
  Completed: 'COMPLETED',
  Declined: 'DECLINED',
  DeliveryFailed: 'DELIVERY_FAILED',
  DisableRecording: 'DISABLE_RECORDING',
  EnableRepeatEntries: 'ENABLE_REPEAT_ENTRIES',
  DisableRepeatEntries: 'DISABLE_REPEAT_ENTRIES',
  EnableRecording: 'ENABLE_RECORDING',
  LiveEditingStarted: 'LIVE_EDITING_STARTED',
  LiveEditingFinished: 'LIVE_EDITING_FINISHED',
  JointSignersGroupCreated: 'JOINT_SIGNERS_GROUP_CREATED',
  JointSignersGroupRemoved: 'JOINT_SIGNERS_GROUP_REMOVED',
  LiveStarted: 'LIVE_STARTED',
  LiveEnded: 'LIVE_ENDED',
  LockedForReview: 'LOCKED_FOR_REVIEW',
  UnlockedFromReview: 'UNLOCKED_FROM_REVIEW',
  ObserverInvited: 'OBSERVER_INVITED',
  ObserverRemoved: 'OBSERVER_REMOVED',
  Prepared: 'PREPARED',
  Reminder: 'REMINDER',
  ReminderByTextMessage: 'REMINDER_BY_TEXT_MESSAGE',
  Rescheduled: 'RESCHEDULED',
  Sent: 'SENT',
  Scheduled: 'SCHEDULED',
  Signed: 'SIGNED',
  SignerAdded: 'SIGNER_ADDED',
  SignerRemoved: 'SIGNER_REMOVED',
  Transferred: 'TRANSFERRED',
  Viewed: 'VIEWED',
} as const;

export type ESignatureEventEnum =
  (typeof ESignatureEventEnum)[keyof typeof ESignatureEventEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureIdHeaderLocationEnum = {
  TopLeft: 'TOP_LEFT',
  TopRight: 'TOP_RIGHT',
  BottomLeft: 'BOTTOM_LEFT',
  BottomRight: 'BOTTOM_RIGHT',
} as const;

export type ESignatureIdHeaderLocationEnum =
  (typeof ESignatureIdHeaderLocationEnum)[keyof typeof ESignatureIdHeaderLocationEnum];

/**
 *
 * @export
 * @interface ESignatureJointSignersGroup
 */
export interface ESignatureJointSignersGroup {
  /**
   *
   * @type {string}
   * @memberof ESignatureJointSignersGroup
   */
  id?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ESignatureJointSignersGroup
   */
  signerIds: Array<string>;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureKindEnum = {
  InPerson: 'IN_PERSON',
  Live: 'LIVE',
  Standard: 'STANDARD',
} as const;

export type ESignatureKindEnum =
  (typeof ESignatureKindEnum)[keyof typeof ESignatureKindEnum];

/**
 *
 * @export
 * @interface ESignaturePackage
 */
export interface ESignaturePackage {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackage
   */
  id: string;
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackage
   */
  isTestMode?: boolean;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackage
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackage
   */
  description?: string;
  /**
   *
   * @type {Array<ESignatureDocument>}
   * @memberof ESignaturePackage
   */
  documents?: Array<ESignatureDocument>;
  /**
   *
   * @type {Array<ESignatureSigner>}
   * @memberof ESignaturePackage
   */
  signers?: Array<ESignatureSigner>;
  /**
   *
   * @type {Array<ESignatureCCRecipient>}
   * @memberof ESignaturePackage
   */
  ccRecipients?: Array<ESignatureCCRecipient>;
  /**
   * Signers are sent by order
   * @type {boolean}
   * @memberof ESignaturePackage
   */
  orderedSigners?: boolean;
  /**
   *
   * @type {ESignatureStatusEnum}
   * @memberof ESignaturePackage
   */
  status?: ESignatureStatusEnum;
  /**
   *
   * @type {ESignatureKindEnum}
   * @memberof ESignaturePackage
   */
  kind?: ESignatureKindEnum;
  /**
   *
   * @type {ESignatureSchedulingDetails}
   * @memberof ESignaturePackage
   */
  schedulingDetails?: ESignatureSchedulingDetails;
  /**
   *
   * @type {Array<ESignatureAttachment>}
   * @memberof ESignaturePackage
   */
  attachments?: Array<ESignatureAttachment>;
  /**
   *
   * @type {Array<ESignatureJointSignersGroup>}
   * @memberof ESignaturePackage
   */
  jointSignersGroups?: Array<ESignatureJointSignersGroup>;
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackage
   */
  recordedLiveESignature?: boolean;
  /**
   *
   * @type {ESignatureAdvancedOptions}
   * @memberof ESignaturePackage
   */
  advancedOptions?: ESignatureAdvancedOptions;
  /**
   * Package folder that the esp is part of
   * @type {string}
   * @memberof ESignaturePackage
   */
  packageFolderId?: string;
  /**
   * Id of the applicable eNotaryPackage
   * @type {string}
   * @memberof ESignaturePackage
   */
  eNotaryPackageId?: string;
  /**
   * Id of the applicable custom brand item to apply to this eSignature package
   * @type {string}
   * @memberof ESignaturePackage
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @enum {string}
 */

export const ESignaturePackageDownloadFormatEnum = {
  Default: 'DEFAULT',
  DefaultWithCustomPkiCertificate: 'DEFAULT_WITH_CUSTOM_PKI_CERTIFICATE',
  Unsigned: 'UNSIGNED',
  Headerless: 'HEADERLESS',
  Separate: 'SEPARATE',
  SeparateHeaderless: 'SEPARATE_HEADERLESS',
} as const;

export type ESignaturePackageDownloadFormatEnum =
  (typeof ESignaturePackageDownloadFormatEnum)[keyof typeof ESignaturePackageDownloadFormatEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ESignaturePackageWebhookArtifactEnum = {
  CompletedPackage: 'COMPLETED_PACKAGE',
  ENotaryJournal: 'E_NOTARY_JOURNAL',
  ESignatureAuditTrail: 'E_SIGNATURE_AUDIT_TRAIL',
  IdvAuditTrials: 'IDV_AUDIT_TRIALS',
} as const;

export type ESignaturePackageWebhookArtifactEnum =
  (typeof ESignaturePackageWebhookArtifactEnum)[keyof typeof ESignaturePackageWebhookArtifactEnum];

/**
 *
 * @export
 * @interface ESignaturePackagesActionsCreateTemplateCCRecipientsMapping
 */
export interface ESignaturePackagesActionsCreateTemplateCCRecipientsMapping {
  /**
   * Name of the cc recipient in the mapping
   * @type {string}
   * @memberof ESignaturePackagesActionsCreateTemplateCCRecipientsMapping
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesActionsCreateTemplateCCRecipientsMapping
   */
  ccRecipientId?: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsCreateTemplateSignersMapping
 */
export interface ESignaturePackagesActionsCreateTemplateSignersMapping {
  /**
   * Name of the signer in the mapping
   * @type {string}
   * @memberof ESignaturePackagesActionsCreateTemplateSignersMapping
   */
  name?: string;
  /**
   * Respective id of the signer
   * @type {string}
   * @memberof ESignaturePackagesActionsCreateTemplateSignersMapping
   */
  signerId?: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsForwardParams
 */
export interface ESignaturePackagesActionsForwardParams {
  /**
   * Name of the recipient
   * @type {string}
   * @memberof ESignaturePackagesActionsForwardParams
   */
  name: string;
  /**
   * Email of the signer
   * @type {string}
   * @memberof ESignaturePackagesActionsForwardParams
   */
  email: string;
  /**
   * Message to be embedded in the email
   * @type {string}
   * @memberof ESignaturePackagesActionsForwardParams
   */
  message: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsModifyAdvancedOptionsParams
 */
export interface ESignaturePackagesActionsModifyAdvancedOptionsParams {
  /**
   *
   * @type {ESignatureAdvancedOptions}
   * @memberof ESignaturePackagesActionsModifyAdvancedOptionsParams
   */
  advancedOptions?: ESignatureAdvancedOptions;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsModifyMetadataParams
 */
export interface ESignaturePackagesActionsModifyMetadataParams {
  /**
   *
   * @type {any}
   * @memberof ESignaturePackagesActionsModifyMetadataParams
   */
  metadata?: any;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsRescheduleParams
 */
export interface ESignaturePackagesActionsRescheduleParams {
  /**
   * Timezone used to format the date in the notifications. Timezone must be a valid [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * @type {string}
   * @memberof ESignaturePackagesActionsRescheduleParams
   */
  timezone?: string;
  /**
   * The start time in ISO 8601 format. The format of is always 24 or 27 characters long `YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`
   * @type {string}
   * @memberof ESignaturePackagesActionsRescheduleParams
   */
  date?: string;
  /**
   * Duration
   * @type {number}
   * @memberof ESignaturePackagesActionsRescheduleParams
   */
  durationInMinutes?: number;
  /**
   *
   * @type {RescheduleENotaryAuthOptions}
   * @memberof ESignaturePackagesActionsRescheduleParams
   */
  eNotaryAuthOptions?: RescheduleENotaryAuthOptions;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsSwitchKindParams
 */
export interface ESignaturePackagesActionsSwitchKindParams {
  /**
   * Updated
   * @type {string}
   * @memberof ESignaturePackagesActionsSwitchKindParams
   */
  title?: string;
  /**
   * Description of the eSignature package
   * @type {string}
   * @memberof ESignaturePackagesActionsSwitchKindParams
   */
  description?: string;
  /**
   *
   * @type {ESignatureKindEnum}
   * @memberof ESignaturePackagesActionsSwitchKindParams
   */
  kind?: ESignatureKindEnum;
  /**
   *
   * @type {ESignatureSchedulingDetails}
   * @memberof ESignaturePackagesActionsSwitchKindParams
   */
  schedulingDetails?: ESignatureSchedulingDetails;
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesActionsSwitchKindParams
   */
  orderedSigners?: boolean;
  /**
   *
   * @type {ESignatureAdvancedOptions}
   * @memberof ESignaturePackagesActionsSwitchKindParams
   */
  advancedOptions?: ESignatureAdvancedOptions;
}

/**
 *
 * @export
 * @interface ESignaturePackagesActionsTransferParams
 */
export interface ESignaturePackagesActionsTransferParams {
  /**
   * Pactima\'s `publicId` of the new owner of the eSignature package
   * @type {string}
   * @memberof ESignaturePackagesActionsTransferParams
   */
  recipientUserId: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesActionsTriggerParams
 */
export interface ESignaturePackagesActionsTriggerParams {
  /**
   * Title of the eSignature package, if provided, will update current title
   * @type {string}
   * @memberof ESignaturePackagesActionsTriggerParams
   */
  title?: string;
  /**
   * Description of the eSignature package, if provided, will update current description
   * @type {string}
   * @memberof ESignaturePackagesActionsTriggerParams
   */
  description?: string;
  /**
   * Public id of the teammate that this is triggered for. This user will be the new owner of the package
   * @type {string}
   * @memberof ESignaturePackagesActionsTriggerParams
   */
  onBehalfOf?: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesAttachmentsListResponse
 */
export interface ESignaturePackagesAttachmentsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesAttachmentsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureAttachment>}
   * @memberof ESignaturePackagesAttachmentsListResponse
   */
  data?: Array<ESignatureAttachment>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesAttachmentsUpdate
 */
export interface ESignaturePackagesAttachmentsUpdate {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesAttachmentsUpdate
   */
  filename?: string;
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesAttachmentsUpdate
   */
  isConfidential?: boolean;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesAttachmentsUpdate
   */
  requestId?: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesCCRecipientsObtainObserverLinkParams
 */
export interface ESignaturePackagesCCRecipientsObtainObserverLinkParams {
  /**
   * Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \"2 days\", \"10h\", \"7d\", without an time units, the default is milliseconds, i.e. \"120\" equals \"120ms\" )
   * @type {string}
   * @memberof ESignaturePackagesCCRecipientsObtainObserverLinkParams
   */
  duration: string;
  /**
   * Specify whether the signer of the LIVE package should join the signing session without video
   * @type {boolean}
   * @memberof ESignaturePackagesCCRecipientsObtainObserverLinkParams
   */
  joinWithoutVideo?: boolean;
}
/**
 *
 * @export
 * @interface ESignaturePackagesCCRecipientsObtainObserverLinkResponse
 */
export interface ESignaturePackagesCCRecipientsObtainObserverLinkResponse {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesCCRecipientsObtainObserverLinkResponse
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesCCRecipientsObtainObserverLinkResponse
   */
  shortUrl: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesCcRecipientsListResponse
 */
export interface ESignaturePackagesCcRecipientsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesCcRecipientsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureCCRecipient>}
   * @memberof ESignaturePackagesCcRecipientsListResponse
   */
  data?: Array<ESignatureCCRecipient>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesCreateParams
 */
export interface ESignaturePackagesCreateParams {
  /**
   * The title of the eSignature package.
   * @type {string}
   * @memberof ESignaturePackagesCreateParams
   */
  title: string;
  /**
   * Description of of the eSignature package.
   * @type {string}
   * @memberof ESignaturePackagesCreateParams
   */
  description?: string;
  /**
   * Pactima ID of the owner of the package. Defaults to the id of the requester; when using as Team Integration API Key, the request can specify any team member
   * @type {string}
   * @memberof ESignaturePackagesCreateParams
   */
  owner?: string;
  /**
   *
   * @type {ESignatureKindEnum}
   * @memberof ESignaturePackagesCreateParams
   */
  kind?: ESignatureKindEnum;
  /**
   * Determine if signers are ordered, only for STANDARD eSignature kinds
   * @type {boolean}
   * @memberof ESignaturePackagesCreateParams
   */
  orderedSigners?: boolean;
  /**
   *
   * @type {ESignatureSchedulingDetails}
   * @memberof ESignaturePackagesCreateParams
   */
  schedulingDetails?: ESignatureSchedulingDetails;
  /**
   *
   * @type {ESignatureAdvancedOptions}
   * @memberof ESignaturePackagesCreateParams
   */
  advancedOptions?: ESignatureAdvancedOptions;
  /**
   * ID of the custom brand item to use for the package. Owner must have own the specified the custom brand item.
   * @type {string}
   * @memberof ESignaturePackagesCreateParams
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsApplyTemplateParams
 */
export interface ESignaturePackagesDocumentsApplyTemplateParams {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesDocumentsApplyTemplateParams
   */
  templateId: string;
  /**
   *
   * @type {Array<ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner>}
   * @memberof ESignaturePackagesDocumentsApplyTemplateParams
   */
  signersMapping: Array<ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner
 */
export interface ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner
   */
  templateSignerId: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner
   */
  signerId?: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesDocumentsApplyTemplateParamsSignersMappingInner
   */
  email?: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsEntryPadsBulkCreateParams
 */
export interface ESignaturePackagesDocumentsEntryPadsBulkCreateParams {
  /**
   * Array of entry pads to create
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignaturePackagesDocumentsEntryPadsBulkCreateParams
   */
  entryPads?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsEntryPadsBulkCreateResponse
 */
export interface ESignaturePackagesDocumentsEntryPadsBulkCreateResponse {
  /**
   *
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignaturePackagesDocumentsEntryPadsBulkCreateResponse
   */
  entryPads?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsEntryPadsBulkDeleteParams
 */
export interface ESignaturePackagesDocumentsEntryPadsBulkDeleteParams {
  /**
   *
   * @type {Array<string>}
   * @memberof ESignaturePackagesDocumentsEntryPadsBulkDeleteParams
   */
  ids?: Array<string>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsEntryPadsListResponse
 */
export interface ESignaturePackagesDocumentsEntryPadsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesDocumentsEntryPadsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignaturePackagesDocumentsEntryPadsListResponse
   */
  data?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsEntryPadsUpdateParams
 */
export interface ESignaturePackagesDocumentsEntryPadsUpdateParams {
  /**
   * Id of the signer
   * @type {string}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  signerId?: string;
  /**
   *
   * @type {ESignatureEntryPadTypeEnum}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  type?: ESignatureEntryPadTypeEnum;
  /**
   * Offset from the left. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  left?: number;
  /**
   * Offset from the top. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  top?: number;
  /**
   * Height of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  height?: number;
  /**
   * Width of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  width?: number;
  /**
   * Page index whereby the entry pad is contained in the document.
   * @type {number}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  pageIndex?: number;
  /**
   * Set to true if the entry pad is optional.
   * @type {boolean}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  isOptional?: boolean;
  /**
   *
   * @type {any}
   * @memberof ESignaturePackagesDocumentsEntryPadsUpdateParams
   */
  metadata?: any;
}

/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsListResponse
 */
export interface ESignaturePackagesDocumentsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesDocumentsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureDocument>}
   * @memberof ESignaturePackagesDocumentsListResponse
   */
  data?: Array<ESignatureDocument>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesDocumentsReorderParams
 */
export interface ESignaturePackagesDocumentsReorderParams {
  /**
   * Array of document ids by which to order the documents
   * @type {Array<string>}
   * @memberof ESignaturePackagesDocumentsReorderParams
   */
  documentsOrder?: Array<string>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesJointSignersGroupsListResponse
 */
export interface ESignaturePackagesJointSignersGroupsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesJointSignersGroupsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureJointSignersGroup>}
   * @memberof ESignaturePackagesJointSignersGroupsListResponse
   */
  data?: Array<ESignatureJointSignersGroup>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesJointSignersGroupsUpdateParams
 */
export interface ESignaturePackagesJointSignersGroupsUpdateParams {
  /**
   * Id of signers
   * @type {Array<string>}
   * @memberof ESignaturePackagesJointSignersGroupsUpdateParams
   */
  signerIds?: Array<string>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesListResponse
 */
export interface ESignaturePackagesListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignaturePackage>}
   * @memberof ESignaturePackagesListResponse
   */
  data?: Array<ESignaturePackage>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesObtainPreparationLinkParams
 */
export interface ESignaturePackagesObtainPreparationLinkParams {
  /**
   * Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \"2 days\", \"10h\", \"7d\", without an time units, the default is milliseconds, i.e. \"120\" equals \"120ms\" )
   * @type {string}
   * @memberof ESignaturePackagesObtainPreparationLinkParams
   */
  duration?: string;
  /**
   *
   * @type {ESignaturePreparationConfig}
   * @memberof ESignaturePackagesObtainPreparationLinkParams
   */
  preparationConfig?: ESignaturePreparationConfig;
}
/**
 *
 * @export
 * @interface ESignaturePackagesObtainPreparationLinkResponse
 */
export interface ESignaturePackagesObtainPreparationLinkResponse {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesObtainPreparationLinkResponse
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesObtainPreparationLinkResponse
   */
  shortUrl: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesRecordingsListResponse
 */
export interface ESignaturePackagesRecordingsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesRecordingsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<LiveESignaturesVideoRecording>}
   * @memberof ESignaturePackagesRecordingsListResponse
   */
  data?: Array<LiveESignaturesVideoRecording>;
  /**
   *
   * @type {number}
   * @memberof ESignaturePackagesRecordingsListResponse
   */
  total?: number;
}
/**
 *
 * @export
 * @interface ESignaturePackagesSignersAttachmentRequestsListResponse
 */
export interface ESignaturePackagesSignersAttachmentRequestsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesSignersAttachmentRequestsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureSignerAttachmentRequest>}
   * @memberof ESignaturePackagesSignersAttachmentRequestsListResponse
   */
  data?: Array<ESignatureSignerAttachmentRequest>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesSignersListResponse
 */
export interface ESignaturePackagesSignersListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignaturePackagesSignersListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureSigner>}
   * @memberof ESignaturePackagesSignersListResponse
   */
  data?: Array<ESignatureSigner>;
}
/**
 *
 * @export
 * @interface ESignaturePackagesSignersObtainSigningLinkParams
 */
export interface ESignaturePackagesSignersObtainSigningLinkParams {
  /**
   * Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \"2 days\", \"10h\", \"7d\", without an time units, the default is milliseconds, i.e. \"120\" equals \"120ms\" )
   * @type {string}
   * @memberof ESignaturePackagesSignersObtainSigningLinkParams
   */
  duration: string;
  /**
   * Specify whether the signer of the LIVE package should join the signing session without video
   * @type {boolean}
   * @memberof ESignaturePackagesSignersObtainSigningLinkParams
   */
  joinWithoutVideo?: boolean;
}
/**
 *
 * @export
 * @interface ESignaturePackagesSignersObtainSigningLinkResponse
 */
export interface ESignaturePackagesSignersObtainSigningLinkResponse {
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesSignersObtainSigningLinkResponse
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof ESignaturePackagesSignersObtainSigningLinkResponse
   */
  shortUrl: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesSignersSendReminderBySMSParams
 */
export interface ESignaturePackagesSignersSendReminderBySMSParams {
  /**
   * Phone number of the signer in E.164 format. Required if the signer does not have phone number.
   * @type {string}
   * @memberof ESignaturePackagesSignersSendReminderBySMSParams
   */
  phoneNumber?: string;
  /**
   * Custom message that will be prepend the link. If not provided, a generic message will be added.
   * @type {string}
   * @memberof ESignaturePackagesSignersSendReminderBySMSParams
   */
  message?: string;
}
/**
 *
 * @export
 * @interface ESignaturePackagesUpdateParams
 */
export interface ESignaturePackagesUpdateParams {
  /**
   * The title of the eSignature package.
   * @type {string}
   * @memberof ESignaturePackagesUpdateParams
   */
  title?: string;
  /**
   * Description of of the eSignature package.
   * @type {string}
   * @memberof ESignaturePackagesUpdateParams
   */
  description?: string;
  /**
   * Pactima ID of the owner of the package. Defaults to the id of the requester; when using as Team Integration API Key, the request can specify any team member
   * @type {string}
   * @memberof ESignaturePackagesUpdateParams
   */
  owner?: string;
  /**
   *
   * @type {ESignatureKindEnum}
   * @memberof ESignaturePackagesUpdateParams
   */
  kind?: ESignatureKindEnum;
  /**
   * Determine if signers are ordered, only for STANDARD eSignature kinds
   * @type {boolean}
   * @memberof ESignaturePackagesUpdateParams
   */
  orderedSigners?: boolean;
  /**
   *
   * @type {ESignatureSchedulingDetails}
   * @memberof ESignaturePackagesUpdateParams
   */
  schedulingDetails?: ESignatureSchedulingDetails;
  /**
   * Bulk signers updates. Only when the package is in DRAFT.
   * @type {Array<ESignatureSigner>}
   * @memberof ESignaturePackagesUpdateParams
   */
  signers?: Array<ESignatureSigner>;
  /**
   * Bulk ccRecipients updates. Only when the package is in DRAFT.
   * @type {Array<ESignatureCCRecipient>}
   * @memberof ESignaturePackagesUpdateParams
   */
  ccRecipients?: Array<ESignatureCCRecipient>;
  /**
   *
   * @type {ESignatureAdvancedOptions}
   * @memberof ESignaturePackagesUpdateParams
   */
  advancedOptions?: ESignatureAdvancedOptions;
  /**
   * Submit empty string, i.e. \'\', to remove eNotary link to this eSignature package
   * @type {string}
   * @memberof ESignaturePackagesUpdateParams
   */
  eNotaryPackageId?: string;
  /**
   * ID of the custom brand item to use for the package. Owner must have own the specified the custom brand item.
   * @type {string}
   * @memberof ESignaturePackagesUpdateParams
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @interface ESignaturePageRotation
 */
export interface ESignaturePageRotation {
  /**
   *
   * @type {number}
   * @memberof ESignaturePageRotation
   */
  pageIndex: number;
  /**
   * Rotation degree counter-clockwise
   * @type {number}
   * @memberof ESignaturePageRotation
   */
  rotationDegrees: number;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureParticipantTypeEnum = {
  Owner: 'OWNER',
  Signer: 'SIGNER',
  CcRecipient: 'CC_RECIPIENT',
  ArchivedCcRecipient: 'ARCHIVED_CC_RECIPIENT',
  ArchivedSigner: 'ARCHIVED_SIGNER',
  ArchivedOwner: 'ARCHIVED_OWNER',
} as const;

export type ESignatureParticipantTypeEnum =
  (typeof ESignatureParticipantTypeEnum)[keyof typeof ESignatureParticipantTypeEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ESignaturePenColorEnum = {
  SignerSelectedColor: 'SIGNER_SELECTED_COLOR',
  Black: 'BLACK',
  Blue: 'BLUE',
  Red: 'RED',
  Green: 'GREEN',
} as const;

export type ESignaturePenColorEnum =
  (typeof ESignaturePenColorEnum)[keyof typeof ESignaturePenColorEnum];

/**
 *
 * @export
 * @interface ESignaturePreparationConfig
 */
export interface ESignaturePreparationConfig {
  /**
   * Steps that the user will be allowed to perform. If not provided, the user will be allowed to perform all steps.
   * @type {Array<ESignaturePreparationStepsEnum>}
   * @memberof ESignaturePreparationConfig
   */
  enforcedAllowedSteps?: Array<ESignaturePreparationStepsEnum>;
  /**
   * Types of eSignature packages that the user will be allowed to create. If not provided, the user will be allowed to create/modify all types of eSignature packages.
   * @type {Array<ESignaturePreparationConfigEnforcedAllowedKindsInner>}
   * @memberof ESignaturePreparationConfig
   */
  enforcedAllowedKinds?: Array<ESignaturePreparationConfigEnforcedAllowedKindsInner>;
}
/**
 * @type ESignaturePreparationConfigEnforcedAllowedKindsInner
 * @export
 */
export type ESignaturePreparationConfigEnforcedAllowedKindsInner =
  | ESignatureKindEnum
  | string;

/**
 *
 * @export
 * @enum {string}
 */

export const ESignaturePreparationStepsEnum = {
  Metadata: 'METADATA',
  PackageType: 'PACKAGE_TYPE',
  Documents: 'DOCUMENTS',
  Recipients: 'RECIPIENTS',
  Prepare: 'PREPARE',
  Calendar: 'CALENDAR',
  Review: 'REVIEW',
} as const;

export type ESignaturePreparationStepsEnum =
  (typeof ESignaturePreparationStepsEnum)[keyof typeof ESignaturePreparationStepsEnum];

/**
 *
 * @export
 * @interface ESignatureSchedulingDetails
 */
export interface ESignatureSchedulingDetails {
  /**
   * Timezone used to format the date in the notifications. Timezone must be a valid [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * @type {string}
   * @memberof ESignatureSchedulingDetails
   */
  timezone?: string;
  /**
   * The start time in ISO 8601 format. The format of is always 24 or 27 characters long `YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`
   * @type {string}
   * @memberof ESignatureSchedulingDetails
   */
  date?: string;
  /**
   * Duration
   * @type {number}
   * @memberof ESignatureSchedulingDetails
   */
  durationInMinutes?: number;
}
/**
 *
 * @export
 * @interface ESignatureSigner
 */
export interface ESignatureSigner {
  /**
   *
   * @type {string}
   * @memberof ESignatureSigner
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSigner
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSigner
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSigner
   */
  phoneNumber?: string;
  /**
   *
   * @type {Array<ESignatureSignerAttachmentRequest>}
   * @memberof ESignatureSigner
   */
  attachmentRequests?: Array<ESignatureSignerAttachmentRequest>;
  /**
   *
   * @type {Array<ESignatureSignerSpecialRoleEnum>}
   * @memberof ESignatureSigner
   */
  specialRoles?: Array<ESignatureSignerSpecialRoleEnum>;
}
/**
 *
 * @export
 * @interface ESignatureSignerAttachmentRequest
 */
export interface ESignatureSignerAttachmentRequest {
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerAttachmentRequest
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerAttachmentRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerAttachmentRequest
   */
  description?: string;
  /**
   * Set to true if the request is optional
   * @type {boolean}
   * @memberof ESignatureSignerAttachmentRequest
   */
  isOptional?: boolean;
  /**
   * Set to true if the attachment should not be shared with other signers; only the owner
   * @type {boolean}
   * @memberof ESignatureSignerAttachmentRequest
   */
  isConfidential?: boolean;
}
/**
 *
 * @export
 * @interface ESignatureSignerENotary
 */
export interface ESignatureSignerENotary {
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerENotary
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerENotary
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerENotary
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureSignerENotary
   */
  phoneNumber?: string;
  /**
   *
   * @type {Array<ESignatureSignerAttachmentRequest>}
   * @memberof ESignatureSignerENotary
   */
  attachmentRequests?: Array<ESignatureSignerAttachmentRequest>;
  /**
   *
   * @type {Array<ESignatureSignerSpecialRoleEnum>}
   * @memberof ESignatureSignerENotary
   */
  specialRoles?: Array<ESignatureSignerSpecialRoleEnum>;
  /**
   *
   * @type {ESignatureSignerENotaryAllOfENotaryValidationRequest}
   * @memberof ESignatureSignerENotary
   */
  eNotaryValidationRequest?: ESignatureSignerENotaryAllOfENotaryValidationRequest;
}
/**
 *
 * @export
 * @interface ESignatureSignerENotaryAllOfENotaryValidationRequest
 */
export interface ESignatureSignerENotaryAllOfENotaryValidationRequest {
  /**
   *
   * @type {ESignatureSignerENotaryAllOfENotaryValidationRequestKba}
   * @memberof ESignatureSignerENotaryAllOfENotaryValidationRequest
   */
  kba?: ESignatureSignerENotaryAllOfENotaryValidationRequestKba;
  /**
   *
   * @type {ESignatureSignerENotaryAllOfENotaryValidationRequestKba}
   * @memberof ESignatureSignerENotaryAllOfENotaryValidationRequest
   */
  idv?: ESignatureSignerENotaryAllOfENotaryValidationRequestKba;
  /**
   *
   * @type {ESignatureSignerENotaryAllOfENotaryValidationRequestLocationVerification}
   * @memberof ESignatureSignerENotaryAllOfENotaryValidationRequest
   */
  locationVerification?: ESignatureSignerENotaryAllOfENotaryValidationRequestLocationVerification;
}
/**
 *
 * @export
 * @interface ESignatureSignerENotaryAllOfENotaryValidationRequestKba
 */
export interface ESignatureSignerENotaryAllOfENotaryValidationRequestKba {
  /**
   *
   * @type {ENotaryPackageValidationRequestEnforcementCriterionEnum}
   * @memberof ESignatureSignerENotaryAllOfENotaryValidationRequestKba
   */
  enforcementCriterion?: ENotaryPackageValidationRequestEnforcementCriterionEnum;
}

/**
 *
 * @export
 * @interface ESignatureSignerENotaryAllOfENotaryValidationRequestLocationVerification
 */
export interface ESignatureSignerENotaryAllOfENotaryValidationRequestLocationVerification {
  /**
   *
   * @type {ENotaryPackageValidationRequestEnforcementCriterionEnum}
   * @memberof ESignatureSignerENotaryAllOfENotaryValidationRequestLocationVerification
   */
  enforcementCriterion?: ENotaryPackageValidationRequestEnforcementCriterionEnum;
}

/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureSignerSpecialRoleEnum = {
  NotaryOfRecord: 'NOTARY_OF_RECORD',
} as const;

export type ESignatureSignerSpecialRoleEnum =
  (typeof ESignatureSignerSpecialRoleEnum)[keyof typeof ESignatureSignerSpecialRoleEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureSpecialParticipantEnum = {
  SignersAll: 'SIGNERS.ALL',
  ObserversAll: 'OBSERVERS.ALL',
  PreparersAll: 'PREPARERS.ALL',
  ParticipantsAll: 'PARTICIPANTS.ALL',
} as const;

export type ESignatureSpecialParticipantEnum =
  (typeof ESignatureSpecialParticipantEnum)[keyof typeof ESignatureSpecialParticipantEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureStatusEnum = {
  Active: 'ACTIVE',
  Cancelled: 'CANCELLED',
  Completed: 'COMPLETED',
  Declined: 'DECLINED',
  Draft: 'DRAFT',
  Live: 'LIVE',
  LiveEditing: 'LIVE_EDITING',
  Prepared: 'PREPARED',
  Processing: 'PROCESSING',
  Sent: 'SENT',
  Scheduled: 'SCHEDULED',
  LockedForReview: 'LOCKED_FOR_REVIEW',
} as const;

export type ESignatureStatusEnum =
  (typeof ESignatureStatusEnum)[keyof typeof ESignatureStatusEnum];

/**
 *
 * @export
 * @interface ESignatureTemplate
 */
export interface ESignatureTemplate {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplate
   */
  id: string;
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplate
   */
  isTestMode?: boolean;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplate
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplate
   */
  description?: string;
  /**
   *
   * @type {Array<ESignatureTemplateDocument>}
   * @memberof ESignatureTemplate
   */
  documents?: Array<ESignatureTemplateDocument>;
  /**
   *
   * @type {Array<ESignatureTemplateSigner>}
   * @memberof ESignatureTemplate
   */
  signers?: Array<ESignatureTemplateSigner>;
  /**
   *
   * @type {Array<ESignatureTemplateRecipient>}
   * @memberof ESignatureTemplate
   */
  ccRecipients?: Array<ESignatureTemplateRecipient>;
  /**
   * Signers are sent by order
   * @type {boolean}
   * @memberof ESignatureTemplate
   */
  orderedSigners?: boolean;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplate
   */
  updatedAt?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplate
   */
  teamId?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplate
   */
  owner?: string;
  /**
   *
   * @type {ESignatureTemplateKind}
   * @memberof ESignatureTemplate
   */
  kind?: ESignatureTemplateKind;
  /**
   * Package folder that the esp is part of
   * @type {string}
   * @memberof ESignatureTemplate
   */
  packageFolderId?: string;
  /**
   * Id of the applicable custom brand item to apply to this eSignature template
   * @type {string}
   * @memberof ESignatureTemplate
   */
  customBrandItemId?: string;
  /**
   *
   * @type {OwnerDetails}
   * @memberof ESignatureTemplate
   */
  ownerDetails?: OwnerDetails;
  /**
   *
   * @type {Array<ESignatureTemplateField>}
   * @memberof ESignatureTemplate
   */
  allTemplateFields?: Array<ESignatureTemplateField>;
}

/**
 *
 * @export
 * @interface ESignatureTemplateDocument
 */
export interface ESignatureTemplateDocument {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateDocument
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateDocument
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateDocument
   */
  contentId?: string;
  /**
   *
   * @type {ESignatureTemplateDocumentRawContent}
   * @memberof ESignatureTemplateDocument
   */
  rawContent?: ESignatureTemplateDocumentRawContent;
  /**
   *
   * @type {number}
   * @memberof ESignatureTemplateDocument
   */
  pageCount?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof ESignatureTemplateDocument
   */
  pageContentIds?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof ESignatureTemplateDocument
   */
  pageContentImages?: Array<string>;
  /**
   *
   * @type {Array<ESignaturePageRotation>}
   * @memberof ESignatureTemplateDocument
   */
  pageRotations?: Array<ESignaturePageRotation>;
  /**
   *
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignatureTemplateDocument
   */
  entryPads?: Array<ESignatureEntryPad>;
  /**
   *
   * @type {Array<ESignatureEntryPadsCheckboxGroup>}
   * @memberof ESignatureTemplateDocument
   */
  entryPadsCheckboxGroups?: Array<ESignatureEntryPadsCheckboxGroup>;
  /**
   *
   * @type {Array<EasySignInput>}
   * @memberof ESignatureTemplateDocument
   */
  easySignInputs?: Array<EasySignInput>;
}
/**
 *
 * @export
 * @interface ESignatureTemplateDocumentFieldMapping
 */
export interface ESignatureTemplateDocumentFieldMapping {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateDocumentFieldMapping
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateDocumentFieldMapping
   */
  value?: string;
}
/**
 *
 * @export
 * @interface ESignatureTemplateDocumentRawContent
 */
export interface ESignatureTemplateDocumentRawContent {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateDocumentRawContent
   */
  contentId?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof ESignatureTemplateDocumentRawContent
   */
  templateFields?: Array<string>;
}
/**
 *
 * @export
 * @interface ESignatureTemplateField
 */
export interface ESignatureTemplateField {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateField
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplateField
   */
  required?: boolean;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureTemplateKind = {
  Regular: 'REGULAR',
  EasySign: 'EASY_SIGN',
} as const;

export type ESignatureTemplateKind =
  (typeof ESignatureTemplateKind)[keyof typeof ESignatureTemplateKind];

/**
 *
 * @export
 * @interface ESignatureTemplateRecipient
 */
export interface ESignatureTemplateRecipient {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateRecipient
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateRecipient
   */
  name: string;
}
/**
 *
 * @export
 * @interface ESignatureTemplateSigner
 */
export interface ESignatureTemplateSigner {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateSigner
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplateSigner
   */
  name: string;
  /**
   *
   * @type {Array<ESignatureSignerAttachmentRequest>}
   * @memberof ESignatureTemplateSigner
   */
  attachmentRequests?: Array<ESignatureSignerAttachmentRequest>;
}
/**
 *
 * @export
 * @enum {string}
 */

export const ESignatureTemplateWebhookArtifactEnum = {
  Sample: 'SAMPLE',
} as const;

export type ESignatureTemplateWebhookArtifactEnum =
  (typeof ESignatureTemplateWebhookArtifactEnum)[keyof typeof ESignatureTemplateWebhookArtifactEnum];

/**
 *
 * @export
 * @interface ESignatureTemplatesActionsForkCcRecipientsMapping
 */
export interface ESignatureTemplatesActionsForkCcRecipientsMapping {
  /**
   * Name of the cc recipient in the mapping
   * @type {string}
   * @memberof ESignatureTemplatesActionsForkCcRecipientsMapping
   */
  name: string;
  /**
   * Respective id of the cc recipient
   * @type {string}
   * @memberof ESignatureTemplatesActionsForkCcRecipientsMapping
   */
  ccRecipientId: string;
  /**
   * Email of the cc recipient
   * @type {string}
   * @memberof ESignatureTemplatesActionsForkCcRecipientsMapping
   */
  email: string;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesActionsForkSignersMapping
 */
export interface ESignatureTemplatesActionsForkSignersMapping {
  /**
   * Name of the signer in the mapping
   * @type {string}
   * @memberof ESignatureTemplatesActionsForkSignersMapping
   */
  name: string;
  /**
   * Respective id of the signer
   * @type {string}
   * @memberof ESignatureTemplatesActionsForkSignersMapping
   */
  signerId: string;
  /**
   * Email of the signer
   * @type {string}
   * @memberof ESignatureTemplatesActionsForkSignersMapping
   */
  email: string;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesCcRecipientsListResponse
 */
export interface ESignatureTemplatesCcRecipientsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesCcRecipientsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureTemplateRecipient>}
   * @memberof ESignatureTemplatesCcRecipientsListResponse
   */
  data?: Array<ESignatureTemplateRecipient>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesCcRecipientsUpdateParams
 */
export interface ESignatureTemplatesCcRecipientsUpdateParams {
  /**
   * Name of the ccRecipient
   * @type {string}
   * @memberof ESignatureTemplatesCcRecipientsUpdateParams
   */
  name?: string;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesCreateParams
 */
export interface ESignatureTemplatesCreateParams {
  /**
   * The title of the eSignature template.
   * @type {string}
   * @memberof ESignatureTemplatesCreateParams
   */
  title: string;
  /**
   * Description of of the eSignature template.
   * @type {string}
   * @memberof ESignatureTemplatesCreateParams
   */
  description?: string;
  /**
   * Pactima ID of the owner of the package. Defaults to the id of the requester; when using as Team Integration API Key, the request can specify any team member
   * @type {string}
   * @memberof ESignatureTemplatesCreateParams
   */
  owner?: string;
  /**
   *
   * @type {ESignatureTemplateKind}
   * @memberof ESignatureTemplatesCreateParams
   */
  kind?: ESignatureTemplateKind;
  /**
   * Determine if signers are ordered
   * @type {boolean}
   * @memberof ESignatureTemplatesCreateParams
   */
  orderedSigners?: boolean;
  /**
   * ID of the custom brand item to use for the package. Owner must have own the specified the custom brand item.
   * @type {string}
   * @memberof ESignatureTemplatesCreateParams
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsEntryPadsBulkCreateParams
 */
export interface ESignatureTemplatesDocumentsEntryPadsBulkCreateParams {
  /**
   * Array of entry pads to create
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignatureTemplatesDocumentsEntryPadsBulkCreateParams
   */
  entryPads?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsEntryPadsBulkCreateResponse
 */
export interface ESignatureTemplatesDocumentsEntryPadsBulkCreateResponse {
  /**
   *
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignatureTemplatesDocumentsEntryPadsBulkCreateResponse
   */
  entryPads?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams
 */
export interface ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams {
  /**
   * Array of entry pad ids to delete
   * @type {Array<string>}
   * @memberof ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams
   */
  ids?: Array<string>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsEntryPadsListResponse
 */
export interface ESignatureTemplatesDocumentsEntryPadsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesDocumentsEntryPadsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureEntryPad>}
   * @memberof ESignatureTemplatesDocumentsEntryPadsListResponse
   */
  data?: Array<ESignatureEntryPad>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsEntryPadsUpdateParams
 */
export interface ESignatureTemplatesDocumentsEntryPadsUpdateParams {
  /**
   * Id of the signer
   * @type {string}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  signerId?: string;
  /**
   *
   * @type {ESignatureEntryPadTypeEnum}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  type?: ESignatureEntryPadTypeEnum;
  /**
   * Offset from the left. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  left?: number;
  /**
   * Offset from the top. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  top?: number;
  /**
   * Height of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  height?: number;
  /**
   * Width of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  width?: number;
  /**
   * Page index whereby the entry pad is contained in the document.
   * @type {number}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  pageIndex?: number;
  /**
   * Set to true if the entry pad is optional.
   * @type {boolean}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  isOptional?: boolean;
  /**
   *
   * @type {any}
   * @memberof ESignatureTemplatesDocumentsEntryPadsUpdateParams
   */
  metadata?: any;
}

/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsListResponse
 */
export interface ESignatureTemplatesDocumentsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesDocumentsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureTemplateDocument>}
   * @memberof ESignatureTemplatesDocumentsListResponse
   */
  data?: Array<ESignatureTemplateDocument>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesDocumentsReorderParams
 */
export interface ESignatureTemplatesDocumentsReorderParams {
  /**
   * Array of document ids by which to order the documents
   * @type {Array<string>}
   * @memberof ESignatureTemplatesDocumentsReorderParams
   */
  documentsOrder?: Array<string>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesListResponse
 */
export interface ESignatureTemplatesListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureTemplate>}
   * @memberof ESignatureTemplatesListResponse
   */
  data?: Array<ESignatureTemplate>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesSignersAttachmentRequestsListResponse
 */
export interface ESignatureTemplatesSignersAttachmentRequestsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesSignersAttachmentRequestsListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureSignerAttachmentRequest>}
   * @memberof ESignatureTemplatesSignersAttachmentRequestsListResponse
   */
  data?: Array<ESignatureSignerAttachmentRequest>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesSignersListResponse
 */
export interface ESignatureTemplatesSignersListResponse {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesSignersListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<ESignatureTemplateSigner>}
   * @memberof ESignatureTemplatesSignersListResponse
   */
  data?: Array<ESignatureTemplateSigner>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesTeamTemplatesCreateParams
 */
export interface ESignatureTemplatesTeamTemplatesCreateParams {
  /**
   *
   * @type {string}
   * @memberof ESignatureTemplatesTeamTemplatesCreateParams
   */
  templateId: string;
  /**
   * id of the team the user is part of.
   * @type {string}
   * @memberof ESignatureTemplatesTeamTemplatesCreateParams
   */
  teamId?: string;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesTeamTemplatesListParams
 */
export interface ESignatureTemplatesTeamTemplatesListParams {
  /**
   *
   * @type {boolean}
   * @memberof ESignatureTemplatesTeamTemplatesListParams
   */
  hasMore: boolean;
  /**
   *
   * @type {Array<ESignatureTemplate>}
   * @memberof ESignatureTemplatesTeamTemplatesListParams
   */
  data: Array<ESignatureTemplate>;
}
/**
 *
 * @export
 * @interface ESignatureTemplatesUpdateParams
 */
export interface ESignatureTemplatesUpdateParams {
  /**
   * The title of the eSignature template.
   * @type {string}
   * @memberof ESignatureTemplatesUpdateParams
   */
  title?: string;
  /**
   * Description of of the eSignature template.
   * @type {string}
   * @memberof ESignatureTemplatesUpdateParams
   */
  description?: string;
  /**
   * Pactima ID of the owner of the package. Defaults to the id of the requester; when using as Team Integration API Key, the request can specify any team member
   * @type {string}
   * @memberof ESignatureTemplatesUpdateParams
   */
  owner?: string;
  /**
   *
   * @type {ESignatureTemplateKind}
   * @memberof ESignatureTemplatesUpdateParams
   */
  kind?: ESignatureTemplateKind;
  /**
   * Determine if signers are ordered, only for STANDARD eSignature kinds
   * @type {boolean}
   * @memberof ESignatureTemplatesUpdateParams
   */
  orderedSigners?: boolean;
  /**
   * Bulk signers updates. Only when the package is in DRAFT.
   * @type {Array<ESignatureTemplateSigner>}
   * @memberof ESignatureTemplatesUpdateParams
   */
  signers?: Array<ESignatureTemplateSigner>;
  /**
   * Bulk ccRecipients updates. Only when the package is in DRAFT.
   * @type {Array<ESignatureTemplateRecipient>}
   * @memberof ESignatureTemplatesUpdateParams
   */
  ccRecipients?: Array<ESignatureTemplateRecipient>;
  /**
   * ID of the custom brand item to use for the package. Owner must have own the specified the custom brand item.
   * @type {string}
   * @memberof ESignatureTemplatesUpdateParams
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @interface EasySignInput
 */
export interface EasySignInput {
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  signerId: string;
  /**
   *
   * @type {number}
   * @memberof EasySignInput
   */
  index: number;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  label?: string;
  /**
   *
   * @type {EasySignInputLabelImage}
   * @memberof EasySignInput
   */
  labelImage?: EasySignInputLabelImage;
  /**
   *
   * @type {boolean}
   * @memberof EasySignInput
   */
  isOptional?: boolean;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  placeholder?: string;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  preFilledValue?: string;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  helpText?: string;
  /**
   *
   * @type {EasySignInputTypeEnum}
   * @memberof EasySignInput
   */
  type?: EasySignInputTypeEnum;
  /**
   *
   * @type {EasySignInputValidation}
   * @memberof EasySignInput
   */
  validation?: EasySignInputValidation;
  /**
   *
   * @type {EasySignInputPositionMapping}
   * @memberof EasySignInput
   */
  positionMapping?: EasySignInputPositionMapping;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  value?: string;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  entryPadId?: string;
  /**
   *
   * @type {string}
   * @memberof EasySignInput
   */
  entryPadsCheckboxGroupId?: string;
}

/**
 *
 * @export
 * @interface EasySignInputLabelImage
 */
export interface EasySignInputLabelImage {
  /**
   * base64 of image data
   * @type {string}
   * @memberof EasySignInputLabelImage
   */
  data?: string;
  /**
   * Width of image
   * @type {number}
   * @memberof EasySignInputLabelImage
   */
  width?: number;
  /**
   *
   * @type {EasySignInputLabelImageHorizontalAlignmentEnum}
   * @memberof EasySignInputLabelImage
   */
  horizontalAlignment?: EasySignInputLabelImageHorizontalAlignmentEnum;
}

/**
 *
 * @export
 * @enum {string}
 */

export const EasySignInputLabelImageHorizontalAlignmentEnum = {
  Left: 'LEFT',
  Center: 'CENTER',
  Right: 'RIGHT',
} as const;

export type EasySignInputLabelImageHorizontalAlignmentEnum =
  (typeof EasySignInputLabelImageHorizontalAlignmentEnum)[keyof typeof EasySignInputLabelImageHorizontalAlignmentEnum];

/**
 *
 * @export
 * @interface EasySignInputPositionMapping
 */
export interface EasySignInputPositionMapping {
  /**
   *
   * @type {number}
   * @memberof EasySignInputPositionMapping
   */
  pageIndex: number;
  /**
   * Offset from the left. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof EasySignInputPositionMapping
   */
  left: number;
  /**
   * Offset from the top. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof EasySignInputPositionMapping
   */
  top: number;
  /**
   * Height of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof EasySignInputPositionMapping
   */
  height: number;
  /**
   * Width of the entry pad. Must be between 0 and 100. Units of measure is the percentage relative to the width of the containing page.
   * @type {number}
   * @memberof EasySignInputPositionMapping
   */
  width: number;
  /**
   *
   * @type {any}
   * @memberof EasySignInputPositionMapping
   */
  metadata?: any;
}
/**
 *
 * @export
 * @enum {string}
 */

export const EasySignInputTypeEnum = {
  Signature: 'SIGNATURE',
  Stamp: 'STAMP',
  Initials: 'INITIALS',
  TextInput: 'TEXT_INPUT',
  Checkbox: 'CHECKBOX',
  Address: 'ADDRESS',
  Email: 'EMAIL',
  PhoneNumber: 'PHONE_NUMBER',
  Name: 'NAME',
  Date: 'DATE',
  DateSigned: 'DATE_SIGNED',
  DisplayText: 'DISPLAY_TEXT',
  CheckboxGroup: 'CHECKBOX_GROUP',
} as const;

export type EasySignInputTypeEnum =
  (typeof EasySignInputTypeEnum)[keyof typeof EasySignInputTypeEnum];

/**
 *
 * @export
 * @interface EasySignInputValidation
 */
export interface EasySignInputValidation {
  /**
   *
   * @type {EasySignInputValidationEnum}
   * @memberof EasySignInputValidation
   */
  type: EasySignInputValidationEnum;
  /**
   *
   * @type {string}
   * @memberof EasySignInputValidation
   */
  value?: string;
}

/**
 *
 * @export
 * @enum {string}
 */

export const EasySignInputValidationEnum = {
  Letters: 'LETTERS',
  Number: 'NUMBER',
  Alphanumeric: 'ALPHANUMERIC',
  Regex: 'REGEX',
} as const;

export type EasySignInputValidationEnum =
  (typeof EasySignInputValidationEnum)[keyof typeof EasySignInputValidationEnum];

/**
 *
 * @export
 * @interface ErrorError
 */
export interface ErrorError {
  /**
   *
   * @type {string}
   * @memberof ErrorError
   */
  message?: string;
  /**
   *
   * @type {number}
   * @memberof ErrorError
   */
  status?: number;
}
/**
 *
 * @export
 * @interface FileDownloadResponse
 */
export interface FileDownloadResponse {
  /**
   *
   * @type {string}
   * @memberof FileDownloadResponse
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof FileDownloadResponse
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof FileDownloadResponse
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof FileDownloadResponse
   */
  signedUrl?: string;
}
/**
 *
 * @export
 * @interface GenericResponseDelete
 */
export interface GenericResponseDelete {
  /**
   *
   * @type {string}
   * @memberof GenericResponseDelete
   */
  id?: string;
  /**
   *
   * @type {boolean}
   * @memberof GenericResponseDelete
   */
  delete?: boolean;
}
/**
 *
 * @export
 * @interface IdentityVerificationAddress
 */
export interface IdentityVerificationAddress {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationAddress
   */
  city?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationAddress
   */
  country?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationAddress
   */
  line1?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationAddress
   */
  line2?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationAddress
   */
  postalCode?: string;
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationAddress
   */
  state?: number;
}
/**
 *
 * @export
 * @interface IdentityVerificationDate
 */
export interface IdentityVerificationDate {
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationDate
   */
  day: number;
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationDate
   */
  month: number;
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationDate
   */
  year: number;
}
/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationDocumentTypeEnum = {
  DriverLicense: 'DRIVER_LICENSE',
  IdCard: 'ID_CARD',
  Passport: 'PASSPORT',
} as const;

export type IdentityVerificationDocumentTypeEnum =
  (typeof IdentityVerificationDocumentTypeEnum)[keyof typeof IdentityVerificationDocumentTypeEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationErrorEnum = {
  Abandoned: 'ABANDONED',
  ConsentDeclined: 'CONSENT_DECLINED',
  CountryNotSupported: 'COUNTRY_NOT_SUPPORTED',
  DeviceNotSupported: 'DEVICE_NOT_SUPPORTED',
  DocumentExpired: 'DOCUMENT_EXPIRED',
  DocumentTypeNotSupported: 'DOCUMENT_TYPE_NOT_SUPPORTED',
  SelfieDocumentMissingPhoto: 'SELFIE_DOCUMENT_MISSING_PHOTO',
  SelfieFaceMismatch: 'SELFIE_FACE_MISMATCH',
  SelfieManipulated: 'SELFIE_MANIPULATED',
  SelfieUnverifiedOther: 'SELFIE_UNVERIFIED_OTHER',
  UnderSupportedAge: 'UNDER_SUPPORTED_AGE',
  Unknown: 'UNKNOWN',
} as const;

export type IdentityVerificationErrorEnum =
  (typeof IdentityVerificationErrorEnum)[keyof typeof IdentityVerificationErrorEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationKindEnum = {
  Document: 'DOCUMENT',
  IdNumber: 'ID_NUMBER',
  ElectronicId: 'ELECTRONIC_ID',
} as const;

export type IdentityVerificationKindEnum =
  (typeof IdentityVerificationKindEnum)[keyof typeof IdentityVerificationKindEnum];

/**
 * Metadata about the verification process
 * @export
 * @interface IdentityVerificationMetadata
 */
export interface IdentityVerificationMetadata {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationMetadata
   */
  title?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationMetadata
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationMetadata
   */
  internalNote?: string;
}
/**
 *
 * @export
 * @interface IdentityVerificationPackage
 */
export interface IdentityVerificationPackage {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationPackage
   */
  id?: string;
  /**
   *
   * @type {boolean}
   * @memberof IdentityVerificationPackage
   */
  isTestMode?: boolean;
  /**
   *
   * @type {IdentityVerificationMetadata}
   * @memberof IdentityVerificationPackage
   */
  metadata?: IdentityVerificationMetadata;
  /**
   *
   * @type {IdentityVerificationKindEnum}
   * @memberof IdentityVerificationPackage
   */
  kind: IdentityVerificationKindEnum;
  /**
   *
   * @type {IdentityVerificationStatusEnum}
   * @memberof IdentityVerificationPackage
   */
  status?: IdentityVerificationStatusEnum;
  /**
   *
   * @type {IdentityVerificationRespondent}
   * @memberof IdentityVerificationPackage
   */
  respondent?: IdentityVerificationRespondent;
  /**
   *
   * @type {IdentityVerificationRequest}
   * @memberof IdentityVerificationPackage
   */
  request?: IdentityVerificationRequest;
  /**
   *
   * @type {Array<IdentityVerificationProcessingBundle>}
   * @memberof IdentityVerificationPackage
   */
  processingBundles?: Array<IdentityVerificationProcessingBundle>;
  /**
   * Package folder that the esp is part of
   * @type {string}
   * @memberof IdentityVerificationPackage
   */
  packageFolderId?: string;
  /**
   * ID of the respective eNotary package
   * @type {string}
   * @memberof IdentityVerificationPackage
   */
  eNotaryPackageId?: string;
  /**
   * ID of the respective notary public verification
   * @type {string}
   * @memberof IdentityVerificationPackage
   */
  notaryPublicVerificationId?: string;
  /**
   * Id of the applicable custom brand item to apply to this eSignature template
   * @type {string}
   * @memberof IdentityVerificationPackage
   */
  customBrandItemId?: string;
  /**
   *
   * @type {Array<SubscriptionPackageUsage>}
   * @memberof IdentityVerificationPackage
   */
  _subscriptionPackageUsages?: Array<SubscriptionPackageUsage>;
  /**
   *
   * @type {OwnerDetails}
   * @memberof IdentityVerificationPackage
   */
  ownerDetails?: OwnerDetails;
  /**
   *
   * @type {PackageFolder}
   * @memberof IdentityVerificationPackage
   */
  packageFolderDetails?: PackageFolder;
}

/**
 *
 * @export
 * @interface IdentityVerificationPackageAdvancedOptions
 */
export interface IdentityVerificationPackageAdvancedOptions {
  /**
   * Determined on the configuration of the ultimate owner of the identity verification package.
   * @type {boolean}
   * @memberof IdentityVerificationPackageAdvancedOptions
   */
  enforceInternalNote?: boolean;
}
/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationPackageWebhookArtifactEnum = {
  Sample: 'SAMPLE',
} as const;

export type IdentityVerificationPackageWebhookArtifactEnum =
  (typeof IdentityVerificationPackageWebhookArtifactEnum)[keyof typeof IdentityVerificationPackageWebhookArtifactEnum];

/**
 *
 * @export
 * @interface IdentityVerificationProcessingBundle
 */
export interface IdentityVerificationProcessingBundle {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationProcessingBundle
   */
  id?: string;
  /**
   *
   * @type {IdentityVerificationSubmission}
   * @memberof IdentityVerificationProcessingBundle
   */
  submission: IdentityVerificationSubmission;
  /**
   *
   * @type {IdentityVerificationResults}
   * @memberof IdentityVerificationProcessingBundle
   */
  results?: IdentityVerificationResults;
  /**
   *
   * @type {IdentityVerificationErrorEnum}
   * @memberof IdentityVerificationProcessingBundle
   */
  error?: IdentityVerificationErrorEnum;
  /**
   *
   * @type {IdentityVerificationRiskRating}
   * @memberof IdentityVerificationProcessingBundle
   */
  riskRating?: IdentityVerificationRiskRating;
}

/**
 *
 * @export
 * @interface IdentityVerificationRequest
 */
export interface IdentityVerificationRequest {
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationRequest
   */
  requiredNumber?: number;
  /**
   *
   * @type {boolean}
   * @memberof IdentityVerificationRequest
   */
  selfieMatch?: boolean;
  /**
   *
   * @type {Array<VerificationRequestDocumentOptionsAllowedTypeInner>}
   * @memberof IdentityVerificationRequest
   */
  allowedTypes?: Array<VerificationRequestDocumentOptionsAllowedTypeInner>;
  /**
   *
   * @type {Array<string>}
   * @memberof IdentityVerificationRequest
   */
  acceptedCountries: Array<string>;
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationRequest
   */
  minimumAgeRestriction?: number;
}
/**
 * A respondent is the person who is submitting their identity for verification
 * @export
 * @interface IdentityVerificationRespondent
 */
export interface IdentityVerificationRespondent {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  token?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  firstName?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  lastName?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof IdentityVerificationRespondent
   */
  otherNames?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  selfie?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  livenessVideo?: string;
  /**
   *
   * @type {IdentityVerificationRespondentLivenessStatus}
   * @memberof IdentityVerificationRespondent
   */
  livenessStatus?: IdentityVerificationRespondentLivenessStatus;
  /**
   * Public ID of the respondent in Pactima, if they are a registered user
   * @type {string}
   * @memberof IdentityVerificationRespondent
   */
  pactimaPublicId?: string;
}
/**
 * @type IdentityVerificationRespondentLivenessStatus
 * @export
 */
export type IdentityVerificationRespondentLivenessStatus =
  | IdentityVerificationErrorEnum
  | IdentityVerificationSuccessEnum;

/**
 *
 * @export
 * @interface IdentityVerificationResults
 */
export interface IdentityVerificationResults {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  idNumber: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  firstName: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  lastName: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  middleName?: string;
  /**
   *
   * @type {IdentityVerificationDate}
   * @memberof IdentityVerificationResults
   */
  dob: IdentityVerificationDate;
  /**
   *
   * @type {IdentityVerificationAddress}
   * @memberof IdentityVerificationResults
   */
  address?: IdentityVerificationAddress;
  /**
   *
   * @type {IdentityVerificationDate}
   * @memberof IdentityVerificationResults
   */
  issueDate: IdentityVerificationDate;
  /**
   *
   * @type {IdentityVerificationDate}
   * @memberof IdentityVerificationResults
   */
  expiryDate: IdentityVerificationDate;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  issuingCountry?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  nationality?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationResults
   */
  sex?: string;
  /**
   *
   * @type {number}
   * @memberof IdentityVerificationResults
   */
  confidence: number;
  /**
   *
   * @type {IdentityVerificationDate}
   * @memberof IdentityVerificationResults
   */
  processingDate: IdentityVerificationDate;
}
/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationRiskLevelEnum = {
  Low: 'LOW',
  Medium: 'MEDIUM',
  High: 'HIGH',
} as const;

export type IdentityVerificationRiskLevelEnum =
  (typeof IdentityVerificationRiskLevelEnum)[keyof typeof IdentityVerificationRiskLevelEnum];

/**
 *
 * @export
 * @interface IdentityVerificationRiskRating
 */
export interface IdentityVerificationRiskRating {
  /**
   *
   * @type {IdentityVerificationRiskLevelEnum}
   * @memberof IdentityVerificationRiskRating
   */
  riskLevel?: IdentityVerificationRiskLevelEnum;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRiskRating
   */
  reason?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRiskRating
   */
  reasonCode?: string;
  /**
   *
   * @type {Array<IdentityVerificationRiskRatingLabelsInner>}
   * @memberof IdentityVerificationRiskRating
   */
  labels?: Array<IdentityVerificationRiskRatingLabelsInner>;
}

/**
 *
 * @export
 * @interface IdentityVerificationRiskRatingLabelsInner
 */
export interface IdentityVerificationRiskRatingLabelsInner {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRiskRatingLabelsInner
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationRiskRatingLabelsInner
   */
  description?: string;
}
/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationStatusEnum = {
  Draft: 'DRAFT',
  SubmittingLiveness: 'SUBMITTING_LIVENESS',
  InProgress: 'IN_PROGRESS',
  Processing: 'PROCESSING',
  Cancelled: 'CANCELLED',
  Verified: 'VERIFIED',
  Failed: 'FAILED',
} as const;

export type IdentityVerificationStatusEnum =
  (typeof IdentityVerificationStatusEnum)[keyof typeof IdentityVerificationStatusEnum];

/**
 *
 * @export
 * @interface IdentityVerificationSubmission
 */
export interface IdentityVerificationSubmission {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationSubmission
   */
  createdAt?: string;
  /**
   *
   * @type {IdentityVerificationDocumentTypeEnum}
   * @memberof IdentityVerificationSubmission
   */
  documentType: IdentityVerificationDocumentTypeEnum;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationSubmission
   */
  documentCountry?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationSubmission
   */
  documentState?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationSubmission
   */
  frontImage: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationSubmission
   */
  backImage?: string;
}

/**
 *
 * @export
 * @enum {string}
 */

export const IdentityVerificationSuccessEnum = {
  Success: 'SUCCESS',
} as const;

export type IdentityVerificationSuccessEnum =
  (typeof IdentityVerificationSuccessEnum)[keyof typeof IdentityVerificationSuccessEnum];

/**
 *
 * @export
 * @interface IdentityVerificationsCreateParams
 */
export interface IdentityVerificationsCreateParams {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationsCreateParams
   */
  ownerId?: string;
  /**
   *
   * @type {IdentityVerificationKindEnum}
   * @memberof IdentityVerificationsCreateParams
   */
  kind: IdentityVerificationKindEnum;
  /**
   *
   * @type {IdentityVerificationRequest}
   * @memberof IdentityVerificationsCreateParams
   */
  request?: IdentityVerificationRequest;
  /**
   *
   * @type {IdentityVerificationRespondent}
   * @memberof IdentityVerificationsCreateParams
   */
  respondent?: IdentityVerificationRespondent;
  /**
   *
   * @type {IdentityVerificationMetadata}
   * @memberof IdentityVerificationsCreateParams
   */
  metadata?: IdentityVerificationMetadata;
  /**
   * ID of the custom brand item to use for the package. Owner must have own the specified the custom brand item.
   * @type {string}
   * @memberof IdentityVerificationsCreateParams
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @interface IdentityVerificationsListResponse
 */
export interface IdentityVerificationsListResponse {
  /**
   *
   * @type {boolean}
   * @memberof IdentityVerificationsListResponse
   */
  hasMore: boolean;
  /**
   *
   * @type {Array<IdentityVerificationPackage>}
   * @memberof IdentityVerificationsListResponse
   */
  data: Array<IdentityVerificationPackage>;
}
/**
 *
 * @export
 * @interface IdentityVerificationsObtainRespondentLinkRequestParams
 */
export interface IdentityVerificationsObtainRespondentLinkRequestParams {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationsObtainRespondentLinkRequestParams
   */
  duration?: string;
}
/**
 *
 * @export
 * @interface IdentityVerificationsObtainRespondentLinkResponse
 */
export interface IdentityVerificationsObtainRespondentLinkResponse {
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationsObtainRespondentLinkResponse
   */
  url?: string;
  /**
   *
   * @type {string}
   * @memberof IdentityVerificationsObtainRespondentLinkResponse
   */
  shortUrl?: string;
}
/**
 *
 * @export
 * @interface IdentityVerificationsUpdateParams
 */
export interface IdentityVerificationsUpdateParams {
  /**
   *
   * @type {IdentityVerificationKindEnum}
   * @memberof IdentityVerificationsUpdateParams
   */
  kind?: IdentityVerificationKindEnum;
  /**
   *
   * @type {IdentityVerificationRequest}
   * @memberof IdentityVerificationsUpdateParams
   */
  request?: IdentityVerificationRequest;
  /**
   *
   * @type {IdentityVerificationMetadata}
   * @memberof IdentityVerificationsUpdateParams
   */
  metadata?: IdentityVerificationMetadata;
  /**
   *
   * @type {IdentityVerificationRespondent}
   * @memberof IdentityVerificationsUpdateParams
   */
  respondent?: IdentityVerificationRespondent;
  /**
   * ID of the custom brand item to use for the package. Owner must have own the specified the custom brand item.
   * @type {string}
   * @memberof IdentityVerificationsUpdateParams
   */
  customBrandItemId?: string;
}

/**
 *
 * @export
 * @interface InlineWebhook
 */
export interface InlineWebhook {
  /**
   *
   * @type {string}
   * @memberof InlineWebhook
   */
  urlToPublish?: string;
  /**
   *
   * @type {Array<WebhookTriggerEventEnum>}
   * @memberof InlineWebhook
   */
  triggerEvents?: Array<WebhookTriggerEventEnum>;
  /**
   *
   * @type {Array<WebhookArtifactRequest>}
   * @memberof InlineWebhook
   */
  requestedArtifacts?: Array<WebhookArtifactRequest>;
}
/**
 *
 * @export
 * @interface LiveESignaturesVideoRecording
 */
export interface LiveESignaturesVideoRecording {
  /**
   *
   * @type {string}
   * @memberof LiveESignaturesVideoRecording
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof LiveESignaturesVideoRecording
   */
  eSignaturePackageId?: string;
  /**
   *
   * @type {string}
   * @memberof LiveESignaturesVideoRecording
   */
  eSignaturePackageTitle?: string;
  /**
   *
   * @type {string}
   * @memberof LiveESignaturesVideoRecording
   */
  recordingStartDate?: string;
  /**
   *
   * @type {string}
   * @memberof LiveESignaturesVideoRecording
   */
  recordingEndDate?: string;
  /**
   *
   * @type {number}
   * @memberof LiveESignaturesVideoRecording
   */
  duration?: number;
  /**
   *
   * @type {string}
   * @memberof LiveESignaturesVideoRecording
   */
  status?: LiveESignaturesVideoRecordingStatusEnum;
}

export const LiveESignaturesVideoRecordingStatusEnum = {
  InProgress: 'in-progress',
  Completed: 'completed',
} as const;

export type LiveESignaturesVideoRecordingStatusEnum =
  (typeof LiveESignaturesVideoRecordingStatusEnum)[keyof typeof LiveESignaturesVideoRecordingStatusEnum];

/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
  /**
   *
   * @type {ErrorError}
   * @memberof ModelError
   */
  error?: ErrorError;
}
/**
 *
 * @export
 * @interface OwnerDetails
 */
export interface OwnerDetails {
  /**
   *
   * @type {string}
   * @memberof OwnerDetails
   */
  firstName?: string;
  /**
   *
   * @type {string}
   * @memberof OwnerDetails
   */
  lastName?: string;
  /**
   *
   * @type {string}
   * @memberof OwnerDetails
   */
  publicId?: string;
  /**
   *
   * @type {string}
   * @memberof OwnerDetails
   */
  email?: string;
}
/**
 *
 * @export
 * @interface PackageFolder
 */
export interface PackageFolder {
  /**
   *
   * @type {string}
   * @memberof PackageFolder
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFolder
   */
  ownerId?: string;
  /**
   *
   * @type {OwnerDetails}
   * @memberof PackageFolder
   */
  ownerDetails?: OwnerDetails;
  /**
   *
   * @type {string}
   * @memberof PackageFolder
   */
  parentId?: string;
  /**
   *
   * @type {PackageFolderKindEnum}
   * @memberof PackageFolder
   */
  kind?: PackageFolderKindEnum;
  /**
   * Name of the folder. Must be unique for the specific owner at the specified level
   * @type {string}
   * @memberof PackageFolder
   */
  name?: string;
  /**
   *
   * @type {Array<PackageFolderMember>}
   * @memberof PackageFolder
   */
  members?: Array<PackageFolderMember>;
  /**
   *
   * @type {PackageFolderChildren}
   * @memberof PackageFolder
   */
  children?: PackageFolderChildren;
}

/**
 * Element (i.e. eSignature package, eSignature template, or idv package) that\'s part of this folder
 * @export
 * @interface PackageFolderChildElement
 */
export interface PackageFolderChildElement {
  /**
   *
   * @type {string}
   * @memberof PackageFolderChildElement
   */
  id?: string;
  /**
   * The name of the child element
   * @type {string}
   * @memberof PackageFolderChildElement
   */
  name?: string;
}
/**
 * Folder that is part of package
 * @export
 * @interface PackageFolderChildFolder
 */
export interface PackageFolderChildFolder {
  /**
   * Id of the folder
   * @type {string}
   * @memberof PackageFolderChildFolder
   */
  id?: string;
  /**
   * The name of the folder
   * @type {string}
   * @memberof PackageFolderChildFolder
   */
  name?: string;
  /**
   * Virtual property that is `true` is the folder is shared (i.e. has more than one member)
   * @type {boolean}
   * @memberof PackageFolderChildFolder
   */
  isShared?: boolean;
}
/**
 *
 * @export
 * @interface PackageFolderChildren
 */
export interface PackageFolderChildren {
  /**
   *
   * @type {Array<PackageFolderChildElement>}
   * @memberof PackageFolderChildren
   */
  elements?: Array<PackageFolderChildElement>;
  /**
   *
   * @type {Array<PackageFolderChildFolder>}
   * @memberof PackageFolderChildren
   */
  folders?: Array<PackageFolderChildFolder>;
}
/**
 *
 * @export
 * @enum {string}
 */

export const PackageFolderKindEnum = {
  ESignaturePackages: 'E_SIGNATURE_PACKAGES',
  ESignatureTemplates: 'E_SIGNATURE_TEMPLATES',
  IdentityVerificationPackages: 'IDENTITY_VERIFICATION_PACKAGES',
} as const;

export type PackageFolderKindEnum =
  (typeof PackageFolderKindEnum)[keyof typeof PackageFolderKindEnum];

/**
 *
 * @export
 * @interface PackageFolderMember
 */
export interface PackageFolderMember {
  /**
   * Id of team group or public id of individual
   * @type {string}
   * @memberof PackageFolderMember
   */
  id?: string;
  /**
   *
   * @type {PackageFolderMemberTypeEnum}
   * @memberof PackageFolderMember
   */
  type?: PackageFolderMemberTypeEnum;
  /**
   * Name of the team group or individual
   * @type {string}
   * @memberof PackageFolderMember
   */
  name?: string;
  /**
   * Email of the individual
   * @type {string}
   * @memberof PackageFolderMember
   */
  email?: string;
  /**
   *
   * @type {PackageFolderMemberAccessEnum}
   * @memberof PackageFolderMember
   */
  access?: PackageFolderMemberAccessEnum;
}

/**
 *
 * @export
 * @enum {string}
 */

export const PackageFolderMemberAccessEnum = {
  Write: 'WRITE',
  Read: 'READ',
} as const;

export type PackageFolderMemberAccessEnum =
  (typeof PackageFolderMemberAccessEnum)[keyof typeof PackageFolderMemberAccessEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const PackageFolderMemberTypeEnum = {
  TeamGroup: 'TEAM_GROUP',
  Individual: 'INDIVIDUAL',
} as const;

export type PackageFolderMemberTypeEnum =
  (typeof PackageFolderMemberTypeEnum)[keyof typeof PackageFolderMemberTypeEnum];

/**
 *
 * @export
 * @interface RescheduleENotaryAuthOptions
 */
export interface RescheduleENotaryAuthOptions {
  /**
   * Determine if eNotary auth should be reinitialized (removed and then initialized)
   * @type {boolean}
   * @memberof RescheduleENotaryAuthOptions
   */
  resetENotaryAuth: boolean;
  /**
   *
   * @type {Array<string>}
   * @memberof RescheduleENotaryAuthOptions
   */
  signerIds?: Array<string>;
}
/**
 *
 * @export
 * @enum {string}
 */

export const SignatureTypeEnum = {
  Drawn: 'DRAWN',
  Typed: 'TYPED',
  RemoteDevice: 'REMOTE_DEVICE',
  Uploaded: 'UPLOADED',
  Saved: 'SAVED',
} as const;

export type SignatureTypeEnum =
  (typeof SignatureTypeEnum)[keyof typeof SignatureTypeEnum];

/**
 *
 * @export
 * @interface SubscriptionPackageUsage
 */
export interface SubscriptionPackageUsage {
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  date?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  objectId?: string;
  /**
   *
   * @type {SubscriptionPackageUsageObjectTypeEnum}
   * @memberof SubscriptionPackageUsage
   */
  objectType?: SubscriptionPackageUsageObjectTypeEnum;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  objectChildId?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  userId?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  proxyUserId?: string;
  /**
   *
   * @type {SubscriptionPlanFeaturesEnum}
   * @memberof SubscriptionPackageUsage
   */
  featureId?: SubscriptionPlanFeaturesEnum;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  subscriptionPackageId?: string;
  /**
   *
   * @type {string}
   * @memberof SubscriptionPackageUsage
   */
  receiptId?: string;
}

/**
 *
 * @export
 * @enum {string}
 */

export const SubscriptionPackageUsageObjectTypeEnum = {
  ESignaturePackage: 'E_SIGNATURE_PACKAGE',
  IdentityVerificationPackage: 'IDENTITY_VERIFICATION_PACKAGE',
} as const;

export type SubscriptionPackageUsageObjectTypeEnum =
  (typeof SubscriptionPackageUsageObjectTypeEnum)[keyof typeof SubscriptionPackageUsageObjectTypeEnum];

/**
 *
 * @export
 * @enum {string}
 */

export const SubscriptionPlanFeaturesEnum = {
  ESignaturesPostCompletionDelete: 'E_SIGNATURES_POST_COMPLETION_DELETE',
  AttachmentRequest: 'ATTACHMENT_REQUEST',
  CustomBranding: 'CUSTOM_BRANDING',
  BulkSend: 'BULK_SEND',
  CalendarIntegration: 'CALENDAR_INTEGRATION',
  ENotaryRon: 'E_NOTARY_RON',
  ENotaryIpen: 'E_NOTARY_IPEN',
  ESignaturesTemplates: 'E_SIGNATURES_TEMPLATES',
  Idv: 'IDV',
  InPersonESignatures: 'IN_PERSON_E_SIGNATURES',
  LiveESignatures: 'LIVE_E_SIGNATURES',
  LiveESignaturesRecording: 'LIVE_E_SIGNATURES_RECORDING',
  LiveESignaturesSnapshot: 'LIVE_E_SIGNATURES_SNAPSHOT',
  StandardESignatures: 'STANDARD_E_SIGNATURES',
  Hsn: 'HSN',
  PackageFolders: 'PACKAGE_FOLDERS',
} as const;

export type SubscriptionPlanFeaturesEnum =
  (typeof SubscriptionPlanFeaturesEnum)[keyof typeof SubscriptionPlanFeaturesEnum];

/**
 *
 * @export
 * @interface TeamMember
 */
export interface TeamMember {
  /**
   *
   * @type {string}
   * @memberof TeamMember
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof TeamMember
   */
  email: string;
  /**
   * Pactima public id of the user
   * @type {string}
   * @memberof TeamMember
   */
  userId: string;
  /**
   *
   * @type {string}
   * @memberof TeamMember
   */
  subscriptionPlanId?: string;
  /**
   * The roles that member has in the team
   * @type {Array<TeamMemberSpecialRoleEnum>}
   * @memberof TeamMember
   */
  roles?: Array<TeamMemberSpecialRoleEnum>;
}
/**
 * Role of a team member within a team. If the role is not set, the person is a regular member
 * @export
 * @enum {string}
 */

export const TeamMemberSpecialRoleEnum = {
  Admin: 'ADMIN',
  Owner: 'OWNER',
  Developer: 'DEVELOPER',
  ExternalMember: 'EXTERNAL_MEMBER',
} as const;

export type TeamMemberSpecialRoleEnum =
  (typeof TeamMemberSpecialRoleEnum)[keyof typeof TeamMemberSpecialRoleEnum];

/**
 *
 * @export
 * @interface TeamsMembersListResponse
 */
export interface TeamsMembersListResponse {
  /**
   *
   * @type {boolean}
   * @memberof TeamsMembersListResponse
   */
  hasMore?: boolean;
  /**
   *
   * @type {Array<TeamMember>}
   * @memberof TeamsMembersListResponse
   */
  data?: Array<TeamMember>;
}
/**
 *
 * @export
 * @interface VerificationRequestDocumentOptionsAllowedTypeInner
 */
export interface VerificationRequestDocumentOptionsAllowedTypeInner {
  /**
   *
   * @type {boolean}
   * @memberof VerificationRequestDocumentOptionsAllowedTypeInner
   */
  required?: boolean;
  /**
   *
   * @type {string}
   * @memberof VerificationRequestDocumentOptionsAllowedTypeInner
   */
  documentType?: VerificationRequestDocumentOptionsAllowedTypeInnerDocumentTypeEnum;
}

export const VerificationRequestDocumentOptionsAllowedTypeInnerDocumentTypeEnum =
  {
    DriverLicense: 'DRIVER_LICENSE',
    IdCard: 'ID_CARD',
    Passport: 'PASSPORT',
  } as const;

export type VerificationRequestDocumentOptionsAllowedTypeInnerDocumentTypeEnum =
  (typeof VerificationRequestDocumentOptionsAllowedTypeInnerDocumentTypeEnum)[keyof typeof VerificationRequestDocumentOptionsAllowedTypeInnerDocumentTypeEnum];

/**
 *
 * @export
 * @interface WebhookArtifactRequest
 */
export interface WebhookArtifactRequest {
  /**
   *
   * @type {WebhookRequestedArtifactEnum}
   * @memberof WebhookArtifactRequest
   */
  artifactKind?: WebhookRequestedArtifactEnum;
  /**
   *
   * @type {object}
   * @memberof WebhookArtifactRequest
   */
  metadata?: object;
}
/**
 * @type WebhookRequestedArtifactEnum
 * @export
 */
export type WebhookRequestedArtifactEnum =
  | ESignaturePackageWebhookArtifactEnum
  | ESignatureTemplateWebhookArtifactEnum
  | IdentityVerificationPackageWebhookArtifactEnum;

/**
 * @type WebhookTriggerEventEnum
 * @export
 */
export type WebhookTriggerEventEnum = ESignatureEventEnum | string;

/**
 * PactimaApi - axios parameter creator
 * @export
 */
export const PactimaApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Cannot reset the authentication if the respective eSignature package is in a terminal status (i.e. COMPLETED, DECLINED, CANCELED) or Locked status (LOCKED_FOR_REVIEW)
     * @summary Reset the authentication of the eNotary package
     * @param {string} eNotaryPackageId Id of eNotary package
     * @param {ENotaryPackagesActionsResetAuthenticationParams} [eNotaryPackagesActionsResetAuthenticationParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesActionsResetAuthentication: async (
      eNotaryPackageId: string,
      eNotaryPackagesActionsResetAuthenticationParams?: ENotaryPackagesActionsResetAuthenticationParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eNotaryPackageId' is not null or undefined
      assertParamExists(
        'eNotaryPackagesActionsResetAuthentication',
        'eNotaryPackageId',
        eNotaryPackageId,
      );
      const localVarPath =
        `/e-notary-packages/{eNotaryPackageId}/actions/reset-authentication`.replace(
          `{${'eNotaryPackageId'}}`,
          encodeURIComponent(String(eNotaryPackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eNotaryPackagesActionsResetAuthenticationParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Can create afresh or have linked eSignature package can be LIVE (for RON) or IN_PERSON (for IPEN)
     * @summary Create an eNotary package
     * @param {ENotaryPackagesCreateParams} [eNotaryPackagesCreateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesCreate: async (
      eNotaryPackagesCreateParams?: ENotaryPackagesCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/e-notary-packages`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eNotaryPackagesCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Delete an eNotary package
     * @param {string} id eNotary package id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesDelete: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eNotaryPackagesDelete', 'id', id);
      const localVarPath = `/e-notary-packages/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download the eNotary journal. This operation is only valid if the respective eSignature package is in COMPLETED status
     * @summary Obtain eNotary journal download link
     * @param {string} eNotaryPackageId Id of eNotary package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesJournalActionsDownload: async (
      eNotaryPackageId: string,
      duration?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eNotaryPackageId' is not null or undefined
      assertParamExists(
        'eNotaryPackagesJournalActionsDownload',
        'eNotaryPackageId',
        eNotaryPackageId,
      );
      const localVarPath =
        `/e-notary-packages/{eNotaryPackageId}/journal/actions/download`.replace(
          `{${'eNotaryPackageId'}}`,
          encodeURIComponent(String(eNotaryPackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List eNotary Packages
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesList: async (
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/e-notary-packages`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an eNotary package
     * @param {string} id eNotary package id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesRetrieve: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eNotaryPackagesRetrieve', 'id', id);
      const localVarPath = `/e-notary-packages/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Can only update if the respective eSignature package is in DRAFT or LIVE_EDITING mode
     * @summary Update an eNotary package
     * @param {string} id eNotary package id
     * @param {ENotaryPackagesUpdateParams} [eNotaryPackagesUpdateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesUpdate: async (
      id: string,
      eNotaryPackagesUpdateParams?: ENotaryPackagesUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eNotaryPackagesUpdate', 'id', id);
      const localVarPath = `/e-notary-packages/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eNotaryPackagesUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Create a validation request for a particular signer
     * @param {string} id eNotary package id
     * @param {ENotaryPackageValidationRequest} [eNotaryPackageValidationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesValidationRequestsCreate: async (
      id: string,
      eNotaryPackageValidationRequest?: ENotaryPackageValidationRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eNotaryPackagesValidationRequestsCreate', 'id', id);
      const localVarPath =
        `/e-notary-packages/{id}/validation-requests`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(id)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eNotaryPackageValidationRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The respective Live eSignature of eNotary package must be in DRAFT status
     * @summary Delete a validation request for an eNotary package
     * @param {string} id eNotary package id
     * @param {string} signerId id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesValidationRequestsDelete: async (
      id: string,
      signerId: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eNotaryPackagesValidationRequestsDelete', 'id', id);
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eNotaryPackagesValidationRequestsDelete',
        'signerId',
        signerId,
      );
      const localVarPath =
        `/e-notary-packages/{id}/validation-requests/{signerId}`
          .replace(`{${'id'}}`, encodeURIComponent(String(id)))
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Can only update if the respective eSignature package is in DRAFT status
     * @summary Update the validation request of a signer
     * @param {string} id eNotary package id
     * @param {string} signerId id of the signer
     * @param {ENotaryPackagesValidationRequestsUpdateParams} [eNotaryPackagesValidationRequestsUpdateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesValidationRequestsUpdate: async (
      id: string,
      signerId: string,
      eNotaryPackagesValidationRequestsUpdateParams?: ENotaryPackagesValidationRequestsUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eNotaryPackagesValidationRequestsUpdate', 'id', id);
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eNotaryPackagesValidationRequestsUpdate',
        'signerId',
        signerId,
      );
      const localVarPath =
        `/e-notary-packages/{id}/validation-requests/{signerId}`
          .replace(`{${'id'}}`, encodeURIComponent(String(id)))
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eNotaryPackagesValidationRequestsUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Cancels an eSignature package. The package cannot be in `DRAFT` or `COMPLETED` status.
     * @summary Cancel the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsCancel: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsCancel',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/cancel`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a template from the eSignature package
     * @summary Create a template
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} title Name/title of the template
     * @param {Array<ESignaturePackagesActionsCreateTemplateSignersMapping>} signersMapping
     * @param {string} [description] Description of the template
     * @param {Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>} [ccRecipientsMapping]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsCreateTemplate: async (
      eSignaturePackageId: string,
      title: string,
      signersMapping: Array<ESignaturePackagesActionsCreateTemplateSignersMapping>,
      description?: string,
      ccRecipientsMapping?: Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsCreateTemplate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'title' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsCreateTemplate',
        'title',
        title,
      );
      // verify required parameter 'signersMapping' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsCreateTemplate',
        'signersMapping',
        signersMapping,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/create-template`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (title !== undefined) {
        localVarFormParams.append('title', title as any);
      }

      if (description !== undefined) {
        localVarFormParams.append('description', description as any);
      }
      if (signersMapping) {
        localVarFormParams.append(
          'signersMapping',
          signersMapping.join(COLLECTION_FORMATS.csv),
        );
      }

      if (ccRecipientsMapping) {
        localVarFormParams.append(
          'ccRecipientsMapping',
          ccRecipientsMapping.join(COLLECTION_FORMATS.csv),
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Disable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
     * @summary Disable recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsDisableRecording: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsDisableRecording',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/disable-recording`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download the eSignature package. This only provides access to the signed portion of the package, it does not include attachments, audit trials, etc.
     * @summary Obtain a download link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackageDownloadFormatEnum} [format]
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {string} [customPkiCertificateId] Id of the PKI certificate that belongs to the owner the eSignature package
     * @param {ESignatureIdHeaderLocationEnum} [idHeaderLocation]
     * @param {boolean} [isAsync] If true, will send an email to the participant once the download is ready
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsDownload: async (
      eSignaturePackageId: string,
      format?: ESignaturePackageDownloadFormatEnum,
      duration?: string,
      customPkiCertificateId?: string,
      idHeaderLocation?: ESignatureIdHeaderLocationEnum,
      isAsync?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsDownload',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/download`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (format !== undefined) {
        localVarFormParams.append('format', format as any);
      }

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      if (customPkiCertificateId !== undefined) {
        localVarFormParams.append(
          'customPkiCertificateId',
          customPkiCertificateId as any,
        );
      }

      if (idHeaderLocation !== undefined) {
        localVarFormParams.append('idHeaderLocation', idHeaderLocation as any);
      }

      if (isAsync !== undefined) {
        localVarFormParams.append('isAsync', String(isAsync) as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download to obtain the audit trails
     * @summary Obtain audit trails download link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {string} [locale]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsDownloadAuditTrails: async (
      eSignaturePackageId: string,
      duration?: string,
      locale?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsDownloadAuditTrails',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/download-audit-trails`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      if (locale !== undefined) {
        localVarFormParams.append('locale', locale as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Enable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
     * @summary Enable recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsEnableRecording: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsEnableRecording',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/enable-recording`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * For `LIVE` eSignature packages that have been completed, the signing session can be ended to terminate the video conference (and move participants to the exit workflow if applicable).
     * @summary End a signing session
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsEndSigningSession: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsEndSigningSession',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/end-signing-session`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Start a DRAFT e-signature package immediately
     * @summary Start a DRAFT e-signature package immediately
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsExpressStart: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsExpressStart',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/express-start`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Forward a `COMPLETED` eSignature package by email
     * @summary Forward an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsForwardParams} [eSignaturePackagesActionsForwardParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsForward: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsForwardParams?: ESignaturePackagesActionsForwardParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsForward',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/forward`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsForwardParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
     * @summary Modify advanced options of an in-flight eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsModifyAdvancedOptionsParams} [eSignaturePackagesActionsModifyAdvancedOptionsParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsModifyAdvancedOptions: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsModifyAdvancedOptionsParams?: ESignaturePackagesActionsModifyAdvancedOptionsParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsModifyAdvancedOptions',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/modify-advanced-options`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsModifyAdvancedOptionsParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
     * @summary Modify metadata options of an in-flight eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsModifyMetadataParams} [eSignaturePackagesActionsModifyMetadataParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsModifyMetadata: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsModifyMetadataParams?: ESignaturePackagesActionsModifyMetadataParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsModifyMetadata',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/modify-metadata`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsModifyMetadataParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieve advanced options for an eSignature package
     * @summary Retrieve advanced options for an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsObtainAdvancedOptions: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsObtainAdvancedOptions',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/obtain-advanced-options`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link that can be used to request the package. The package must be in `DRAFT` status.
     * @summary Obtain link that can be used to prepare the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesObtainPreparationLinkParams} [eSignaturePackagesObtainPreparationLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsObtainPreparationLink: async (
      eSignaturePackageId: string,
      eSignaturePackagesObtainPreparationLinkParams?: ESignaturePackagesObtainPreparationLinkParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsObtainPreparationLink',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/obtain-preparation-link`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesObtainPreparationLinkParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Redraft sets the eSignature back to the `DRAFT` status to allow modifications. Signers who have agreed and finalized, will have to re-perform their agreement, however their response are still saved.
     * @summary Redraft the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsRedraft: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsRedraft',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/redraft`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Reschedule a LIVE eSignature package. It must be in `LIVE` or `SCHEDULED` status
     * @summary Reschedule a LIVE eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsRescheduleParams} eSignaturePackagesActionsRescheduleParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsReschedule: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsRescheduleParams: ESignaturePackagesActionsRescheduleParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsReschedule',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'eSignaturePackagesActionsRescheduleParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsReschedule',
        'eSignaturePackagesActionsRescheduleParams',
        eSignaturePackagesActionsRescheduleParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/reschedule`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsRescheduleParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Reuse an completed eSignature package to create a draft eSignature package
     * @summary Reuse an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} [owner] ID of the owner of the newly created package. Defaults to owner of the current eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsReuse: async (
      eSignaturePackageId: string,
      owner?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsReuse',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/reuse`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (owner !== undefined) {
        localVarFormParams.append('owner', owner as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieve via file-server to ensure that returns large (i.e. > 6MB)
     * @summary Safely retrieve an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {boolean} [enforcePreventAccessByMaskedRequesterConfig] If true, will enforce the prevent access by masked requester config in the eSignatures advanced options
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsSafeRetrieve: async (
      eSignaturePackageId: string,
      enforcePreventAccessByMaskedRequesterConfig?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsSafeRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/safe-retrieve`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (enforcePreventAccessByMaskedRequesterConfig !== undefined) {
        localVarFormParams.append(
          'enforcePreventAccessByMaskedRequesterConfig',
          String(enforcePreventAccessByMaskedRequesterConfig) as any,
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Start the signing session for `LIVE` eSignature packages in the `SCHEDULED` status moving it to the `LIVE` status; moves the `IN_PERSON` eSignature package from `PREPARED` to `ACTIVE`
     * @summary Start the signing session
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsStartSigningSession: async (
      eSignaturePackageId: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsStartSigningSession',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/start-signing-session`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This endpoint is used to \"re-trigger\", i.e. change the particular kind of the package. Here are the conditions for trigger:\\ - For `LIVE` packages, the status must be `LIVE` or `SCHEDULED` - For `STANDARD` packages, the status must be `SENT`, and - For `IN_PERSON` packages, the status must be `ACTIVE` or `PREPARED`
     * @summary Change the kind of the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsSwitchKindParams} [eSignaturePackagesActionsSwitchKindParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsSwitchKind: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsSwitchKindParams?: ESignaturePackagesActionsSwitchKindParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsSwitchKind',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/switch-kind`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsSwitchKindParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Transfer an eSignature package to another user that is part of the same team
     * @summary Transfer an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsTransferParams} eSignaturePackagesActionsTransferParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsTransfer: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsTransferParams: ESignaturePackagesActionsTransferParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsTransfer',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'eSignaturePackagesActionsTransferParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsTransfer',
        'eSignaturePackagesActionsTransferParams',
        eSignaturePackagesActionsTransferParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/transfer`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsTransferParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Once an eSignature package have been fully drafted, it has to be triggered to start the signing. For `STANDARD` eSignature packages, move to `SENT`; `LIVE` eSignature packages move to `SCHEDULED`; and `IN_PERSON` move to `PREPARED`.
     * @summary Trigger a DRAFT eSignature package for signing
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsTriggerParams} [eSignaturePackagesActionsTriggerParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsTrigger: async (
      eSignaturePackageId: string,
      eSignaturePackagesActionsTriggerParams?: ESignaturePackagesActionsTriggerParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsTrigger',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/trigger`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesActionsTriggerParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Upload a zip file to an eSignature package
     * @summary Upload a zip file
     * @param {string} eSignaturePackageId
     * @param {(Buffer | ReadStream)} [data] The zip file to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsZipUpload: async (
      eSignaturePackageId: string,
      data?: Buffer | ReadStream,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesActionsZipUpload',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/actions/zip-upload`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (data !== undefined) {
        localVarFormParams.append('data', data as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download the original attachment
     * @summary Obtain a download link of a specific attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachments
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsActionsDownload: async (
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsActionsDownload',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsActionsDownload',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/attachments/{id}/actions/download`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create an attachment in the eSignature package, which must be in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Create an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} filename
     * @param {(Buffer | ReadStream)} data
     * @param {boolean} [isConfidential]
     * @param {string} [requestId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsCreate: async (
      eSignaturePackageId: string,
      filename: string,
      data: Buffer | ReadStream,
      isConfidential?: boolean,
      requestId?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'filename' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsCreate',
        'filename',
        filename,
      );
      // verify required parameter 'data' is not null or undefined
      assertParamExists('eSignaturePackagesAttachmentsCreate', 'data', data);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/attachments`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (filename !== undefined) {
        localVarFormParams.append('filename', filename as any);
      }

      if (data !== undefined) {
        localVarFormParams.append('data', data as any);
      }

      if (isConfidential !== undefined) {
        localVarFormParams.append(
          'isConfidential',
          String(isConfidential) as any,
        );
      }

      if (requestId !== undefined) {
        localVarFormParams.append('requestId', requestId as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Delete an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsDelete: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesAttachmentsDelete', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/attachments/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List the attachments in the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 500.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsList: async (
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/attachments`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsRetrieve: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesAttachmentsRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/attachments/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Only updates the metadata of attachment. This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Update an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {ESignaturePackagesAttachmentsUpdate} eSignaturePackagesAttachmentsUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsUpdate: async (
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesAttachmentsUpdate: ESignaturePackagesAttachmentsUpdate,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesAttachmentsUpdate', 'id', id);
      // verify required parameter 'eSignaturePackagesAttachmentsUpdate' is not null or undefined
      assertParamExists(
        'eSignaturePackagesAttachmentsUpdate',
        'eSignaturePackagesAttachmentsUpdate',
        eSignaturePackagesAttachmentsUpdate,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/attachments/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesAttachmentsUpdate,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Obtain a secure link to be used for a ccRecipient who has a special role as OBSERVER or OBSERVER_ONLY. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED).
     * @summary Obtain observer link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of ccRecipient
     * @param {ESignaturePackagesCCRecipientsObtainObserverLinkParams} [eSignaturePackagesCCRecipientsObtainObserverLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsActionsObtainObserverLink: async (
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesCCRecipientsObtainObserverLinkParams?: ESignaturePackagesCCRecipientsObtainObserverLinkParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsActionsObtainObserverLink',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsActionsObtainObserverLink',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/cc-recipients/{id}/actions/obtain-observer-link`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesCCRecipientsObtainObserverLinkParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a ccRecipient in the eSignature package, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Create a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureCCRecipient} eSignatureCCRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsCreate: async (
      eSignaturePackageId: string,
      eSignatureCCRecipient: ESignatureCCRecipient,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'eSignatureCCRecipient' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsCreate',
        'eSignatureCCRecipient',
        eSignatureCCRecipient,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/cc-recipients`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureCCRecipient,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Delete a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsDelete: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesCcRecipientsDelete', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/cc-recipients/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List all cc-recipients
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsList: async (
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/cc-recipients`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsRetrieve: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesCcRecipientsRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/cc-recipients/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Update a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {ESignatureCCRecipient} eSignatureCCRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsUpdate: async (
      eSignaturePackageId: string,
      id: string,
      eSignatureCCRecipient: ESignatureCCRecipient,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesCcRecipientsUpdate', 'id', id);
      // verify required parameter 'eSignatureCCRecipient' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCcRecipientsUpdate',
        'eSignatureCCRecipient',
        eSignatureCCRecipient,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/cc-recipients/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureCCRecipient,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Creates an eSignature package and sets it initially in the `DRAFT` status.
     * @summary Create an eSignature package
     * @param {ESignaturePackagesCreateParams} eSignaturePackagesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCreate: async (
      eSignaturePackagesCreateParams: ESignaturePackagesCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackagesCreateParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesCreate',
        'eSignaturePackagesCreateParams',
        eSignaturePackagesCreateParams,
      );
      const localVarPath = `/e-signature-packages`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Deletes the eSignature package if it in the `DRAFT` or `CANCELLED` statuses. If the eSignature package is in the `COMPLETED` it will be deleted from the account, but archived according Pactima\'s retention policy.
     * @summary Delete an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDelete: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDelete', 'id', id);
      const localVarPath = `/e-signature-packages/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Apply eSignature template fields to specific document. The document must be in a `DRAFT` or `LIVE_EDITING` status
     * @summary Apply template fields to specific document
     * @param {string} eSignaturePackageId ID of ESignaturePackage
     * @param {string} id ID of document where fields need to be applied
     * @param {ESignaturePackagesDocumentsApplyTemplateParams} eSignaturePackagesDocumentsApplyTemplateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsActionsApplyTemplate: async (
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesDocumentsApplyTemplateParams: ESignaturePackagesDocumentsApplyTemplateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsActionsApplyTemplate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsActionsApplyTemplate',
        'id',
        id,
      );
      // verify required parameter 'eSignaturePackagesDocumentsApplyTemplateParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsActionsApplyTemplate',
        'eSignaturePackagesDocumentsApplyTemplateParams',
        eSignaturePackagesDocumentsApplyTemplateParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{id}/actions/apply-template`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesDocumentsApplyTemplateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download the PDF version of an uploaded document.
     * @summary Obtain a download link of a specific document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of document
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsActionsDownload: async (
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsActionsDownload',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsActionsDownload', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{id}/actions/download`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Reorder documents given a referenced array of document ids. The package must be in a draft status, (i.e. DRAFT or LIVE_EDITING)
     * @summary Reorder documents
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesDocumentsReorderParams} eSignaturePackagesDocumentsReorderParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsActionsReorder: async (
      eSignaturePackageId: string,
      eSignaturePackagesDocumentsReorderParams: ESignaturePackagesDocumentsReorderParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsActionsReorder',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'eSignaturePackagesDocumentsReorderParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsActionsReorder',
        'eSignaturePackagesDocumentsReorderParams',
        eSignaturePackagesDocumentsReorderParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/actions/reorder`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesDocumentsReorderParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a document in the eSignature package, the latter must be in either `DRAFT` or `LIVE_EDITING` status.
     * @summary Create a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} name Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsCreate: async (
      eSignaturePackageId: string,
      name: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'name' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsCreate', 'name', name);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (name !== undefined) {
        localVarFormParams.append('name', name as any);
      }

      if (data !== undefined) {
        localVarFormParams.append('data', data as any);
      }
      if (pageRotations) {
        localVarFormParams.append(
          'pageRotations',
          pageRotations.join(COLLECTION_FORMATS.csv),
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsDelete: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsDelete', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
     * @summary Create multiple entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignaturePackagesDocumentsEntryPadsBulkCreateParams} eSignaturePackagesDocumentsEntryPadsBulkCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsActionsBulkCreate: async (
      eSignaturePackageId: string,
      documentId: string,
      eSignaturePackagesDocumentsEntryPadsBulkCreateParams: ESignaturePackagesDocumentsEntryPadsBulkCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsActionsBulkCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsActionsBulkCreate',
        'documentId',
        documentId,
      );
      // verify required parameter 'eSignaturePackagesDocumentsEntryPadsBulkCreateParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsActionsBulkCreate',
        'eSignaturePackagesDocumentsEntryPadsBulkCreateParams',
        eSignaturePackagesDocumentsEntryPadsBulkCreateParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads/actions/bulk-create`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesDocumentsEntryPadsBulkCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
     * @summary Delete multiple entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignaturePackagesDocumentsEntryPadsBulkDeleteParams} eSignaturePackagesDocumentsEntryPadsBulkDeleteParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsActionsBulkDelete: async (
      eSignaturePackageId: string,
      documentId: string,
      eSignaturePackagesDocumentsEntryPadsBulkDeleteParams: ESignaturePackagesDocumentsEntryPadsBulkDeleteParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsActionsBulkDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsActionsBulkDelete',
        'documentId',
        documentId,
      );
      // verify required parameter 'eSignaturePackagesDocumentsEntryPadsBulkDeleteParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsActionsBulkDelete',
        'eSignaturePackagesDocumentsEntryPadsBulkDeleteParams',
        eSignaturePackagesDocumentsEntryPadsBulkDeleteParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads/actions/bulk-delete`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesDocumentsEntryPadsBulkDeleteParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignatureEntryPad} eSignatureEntryPad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsCreate: async (
      eSignaturePackageId: string,
      documentId: string,
      eSignatureEntryPad: ESignatureEntryPad,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsCreate',
        'documentId',
        documentId,
      );
      // verify required parameter 'eSignatureEntryPad' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsCreate',
        'eSignatureEntryPad',
        eSignatureEntryPad,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureEntryPad,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsDelete: async (
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsDelete',
        'documentId',
        documentId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsEntryPadsDelete', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsList: async (
      eSignaturePackageId: string,
      documentId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsList',
        'documentId',
        documentId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsRetrieve: async (
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsRetrieve',
        'documentId',
        documentId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsRetrieve',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {ESignaturePackagesDocumentsEntryPadsUpdateParams} eSignaturePackagesDocumentsEntryPadsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsUpdate: async (
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      eSignaturePackagesDocumentsEntryPadsUpdateParams: ESignaturePackagesDocumentsEntryPadsUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsUpdate',
        'documentId',
        documentId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsEntryPadsUpdate', 'id', id);
      // verify required parameter 'eSignaturePackagesDocumentsEntryPadsUpdateParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsEntryPadsUpdate',
        'eSignaturePackagesDocumentsEntryPadsUpdateParams',
        eSignaturePackagesDocumentsEntryPadsUpdateParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{documentId}/entry-pads/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesDocumentsEntryPadsUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List all the documents that are part of this eSignature package
     * @summary List all documents
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsList: async (
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsRetrieve: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {string} [name] Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations]
     * @param {Array<EasySignInput>} [easySignInputs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsUpdate: async (
      eSignaturePackageId: string,
      id: string,
      name?: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      easySignInputs?: Array<EasySignInput>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesDocumentsUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesDocumentsUpdate', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/documents/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (name !== undefined) {
        localVarFormParams.append('name', name as any);
      }

      if (data !== undefined) {
        localVarFormParams.append('data', data as any);
      }
      if (pageRotations) {
        localVarFormParams.append(
          'pageRotations',
          pageRotations.join(COLLECTION_FORMATS.csv),
        );
      }

      if (easySignInputs) {
        localVarFormParams.append(
          'easySignInputs',
          easySignInputs.join(COLLECTION_FORMATS.csv),
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a joint signers groups in the eSignature package, only valid signers can be added to a joint signers group.
     * @summary Create a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureJointSignersGroup} eSignatureJointSignersGroup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsCreate: async (
      eSignaturePackageId: string,
      eSignatureJointSignersGroup: ESignatureJointSignersGroup,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'eSignatureJointSignersGroup' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsCreate',
        'eSignatureJointSignersGroup',
        eSignatureJointSignersGroup,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/joint-signers-groups`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureJointSignersGroup,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete the specified joint signers group
     * @summary Delete a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsDelete: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesJointSignersGroupsDelete', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/joint-signers-groups/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List all joint signers groups in an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsList: async (
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/joint-signers-groups`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsRetrieve: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsRetrieve',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/joint-signers-groups/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update the specified joint signers group.
     * @summary Update a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {ESignaturePackagesJointSignersGroupsUpdateParams} eSignaturePackagesJointSignersGroupsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsUpdate: async (
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesJointSignersGroupsUpdateParams: ESignaturePackagesJointSignersGroupsUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesJointSignersGroupsUpdate', 'id', id);
      // verify required parameter 'eSignaturePackagesJointSignersGroupsUpdateParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesJointSignersGroupsUpdate',
        'eSignaturePackagesJointSignersGroupsUpdateParams',
        eSignaturePackagesJointSignersGroupsUpdateParams,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/joint-signers-groups/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesJointSignersGroupsUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
     * @summary List all eSignature packages
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {ESignatureKindEnum} [kind] Filter packages by kind if provided
     * @param {boolean} [isENotary] If provided, will apply a filter to include (i.e. true) or exclude (i.e false) eNotary packages (i.e. IPEN or RON)
     * @param {boolean} [excludeBulkSentPackage] Determines whether to include eSignature packages that are part of a bulk send package
     * @param {string} [searchTerm] Text to search for eSignature packages
     * @param {string} [updatedAtStartDate] Filter packages updated on or after the specified date
     * @param {string} [updatedAtEndDate] Filter packages updated on or before the specified date
     * @param {Array<ESignatureStatusEnum>} [statuses] Filter packages by status
     * @param {Array<string>} [packageFolderIds]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesList: async (
      limit?: number,
      skip?: number,
      kind?: ESignatureKindEnum,
      isENotary?: boolean,
      excludeBulkSentPackage?: boolean,
      searchTerm?: string,
      updatedAtStartDate?: string,
      updatedAtEndDate?: string,
      statuses?: Array<ESignatureStatusEnum>,
      packageFolderIds?: Array<string>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/e-signature-packages`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      if (kind !== undefined) {
        localVarQueryParameter['kind'] = kind;
      }

      if (isENotary !== undefined) {
        localVarQueryParameter['isENotary'] = isENotary;
      }

      if (excludeBulkSentPackage !== undefined) {
        localVarQueryParameter['excludeBulkSentPackage'] =
          excludeBulkSentPackage;
      }

      if (searchTerm !== undefined) {
        localVarQueryParameter['searchTerm'] = searchTerm;
      }

      if (updatedAtStartDate !== undefined) {
        localVarQueryParameter['updatedAtStartDate'] =
          (updatedAtStartDate as any) instanceof Date
            ? (updatedAtStartDate as any).toISOString()
            : updatedAtStartDate;
      }

      if (updatedAtEndDate !== undefined) {
        localVarQueryParameter['updatedAtEndDate'] =
          (updatedAtEndDate as any) instanceof Date
            ? (updatedAtEndDate as any).toISOString()
            : updatedAtEndDate;
      }

      if (statuses) {
        localVarQueryParameter['statuses'] = statuses;
      }

      if (packageFolderIds) {
        localVarQueryParameter['packageFolderIds'] = packageFolderIds;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download for a recording
     * @summary Obtain a download link of a specific recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the recording
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRecordingsDownload: async (
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesRecordingsDownload',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesRecordingsDownload', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/recordings/{id}/download`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List the recordings in the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 500.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRecordingsList: async (
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesRecordingsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/recordings`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRecordingsRetrieve: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesRecordingsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesRecordingsRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/recordings/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRetrieve: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesRetrieve', 'id', id);
      const localVarPath = `/e-signature-packages/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Send a reminder to the signer by email.
     * @summary Send a reminder to a signer by email
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersActionsSendReminderByEmail: async (
      eSignaturePackageId: string,
      id: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersActionsSendReminderByEmail',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersActionsSendReminderByEmail',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{id}/actions/send-reminder-by-email`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Send a reminder to the signer by SMS.
     * @summary Send a reminder to a signer by SMS
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignaturePackagesSignersSendReminderBySMSParams} [eSignaturePackagesSignersSendReminderBySMSParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersActionsSendReminderBySMS: async (
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesSignersSendReminderBySMSParams?: ESignaturePackagesSignersSendReminderBySMSParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersActionsSendReminderBySMS',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersActionsSendReminderBySMS',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{id}/actions/send-reminder-by-sms`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesSignersSendReminderBySMSParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create an attachment request for for a signer. This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the status is `SENT`, the signer should not have already SIGNED.
     * @summary Create an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsCreate: async (
      eSignaturePackageId: string,
      signerId: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsCreate',
        'signerId',
        signerId,
      );
      // verify required parameter 'eSignatureSignerAttachmentRequest' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsCreate',
        'eSignatureSignerAttachmentRequest',
        eSignatureSignerAttachmentRequest,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{signerId}/attachment-requests`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureSignerAttachmentRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
     * @summary Delete a signer attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsDelete: async (
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsDelete',
        'signerId',
        signerId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsDelete',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{signerId}/attachment-requests/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List attachment requests
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsList: async (
      eSignaturePackageId: string,
      signerId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsList',
        'signerId',
        signerId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{signerId}/attachment-requests`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsRetrieve: async (
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsRetrieve',
        'signerId',
        signerId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsRetrieve',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{signerId}/attachment-requests/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
     * @summary Update an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsUpdate: async (
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsUpdate',
        'signerId',
        signerId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsUpdate',
        'id',
        id,
      );
      // verify required parameter 'eSignatureSignerAttachmentRequest' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersAttachmentRequestsUpdate',
        'eSignatureSignerAttachmentRequest',
        eSignatureSignerAttachmentRequest,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{signerId}/attachment-requests/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureSignerAttachmentRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a signer in the eSignature package, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureSignerENotary} eSignatureSignerENotary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersCreate: async (
      eSignaturePackageId: string,
      eSignatureSignerENotary: ESignatureSignerENotary,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersCreate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'eSignatureSignerENotary' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersCreate',
        'eSignatureSignerENotary',
        eSignatureSignerENotary,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureSignerENotary,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
     * @summary Delete a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersDelete: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersDelete',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesSignersDelete', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List all signers
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersList: async (
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersList',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers`.replace(
          `{${'eSignaturePackageId'}}`,
          encodeURIComponent(String(eSignaturePackageId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Obtain a secure link to be used for signing. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED). The signer should
     * @summary Obtain signing link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignaturePackagesSignersObtainSigningLinkParams} [eSignaturePackagesSignersObtainSigningLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersObtainSigningLink: async (
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesSignersObtainSigningLinkParams?: ESignaturePackagesSignersObtainSigningLinkParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersObtainSigningLink',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesSignersObtainSigningLink', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{id}/actions/obtain-signing-link`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesSignersObtainSigningLinkParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersRetrieve: async (
      eSignaturePackageId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersRetrieve',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesSignersRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
     * @summary Update a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignatureSignerENotary} eSignatureSignerENotary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersUpdate: async (
      eSignaturePackageId: string,
      id: string,
      eSignatureSignerENotary: ESignatureSignerENotary,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignaturePackageId' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersUpdate',
        'eSignaturePackageId',
        eSignaturePackageId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesSignersUpdate', 'id', id);
      // verify required parameter 'eSignatureSignerENotary' is not null or undefined
      assertParamExists(
        'eSignaturePackagesSignersUpdate',
        'eSignatureSignerENotary',
        eSignatureSignerENotary,
      );
      const localVarPath =
        `/e-signature-packages/{eSignaturePackageId}/signers/{id}`
          .replace(
            `{${'eSignaturePackageId'}}`,
            encodeURIComponent(String(eSignaturePackageId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureSignerENotary,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update an eSignature package, which must be in `DRAFT` status.
     * @summary Update an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {ESignaturePackagesUpdateParams} eSignaturePackagesUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesUpdate: async (
      id: string,
      eSignaturePackagesUpdateParams: ESignaturePackagesUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignaturePackagesUpdate', 'id', id);
      // verify required parameter 'eSignaturePackagesUpdateParams' is not null or undefined
      assertParamExists(
        'eSignaturePackagesUpdate',
        'eSignaturePackagesUpdateParams',
        eSignaturePackagesUpdateParams,
      );
      const localVarPath = `/e-signature-packages/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignaturePackagesUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download the PDF version of an uploaded document.
     * @summary Download pdf version of template
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 minutes and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesActionsDownload: async (
      eSignatureTemplateId: string,
      duration?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesActionsDownload',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/actions/download`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a package using an eSignature template
     * @summary Create an eSignature package using an eSignature template
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} title Name/title of the template
     * @param {Array<ESignatureTemplatesActionsForkSignersMapping>} signersMapping
     * @param {string} [description] Description of the template
     * @param {ESignatureKindEnum} [kind]
     * @param {Array<ESignatureTemplatesActionsForkCcRecipientsMapping>} [ccRecipientsMapping]
     * @param {Array<ESignatureTemplateDocumentFieldMapping>} [documentFieldMappings] These are the fields for documents, i.e. \\\&quot;documents::x\\\&quot;, it\\\&#39;ll be x
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesActionsFork: async (
      eSignatureTemplateId: string,
      title: string,
      signersMapping: Array<ESignatureTemplatesActionsForkSignersMapping>,
      description?: string,
      kind?: ESignatureKindEnum,
      ccRecipientsMapping?: Array<ESignatureTemplatesActionsForkCcRecipientsMapping>,
      documentFieldMappings?: Array<ESignatureTemplateDocumentFieldMapping>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesActionsFork',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'title' is not null or undefined
      assertParamExists('eSignatureTemplatesActionsFork', 'title', title);
      // verify required parameter 'signersMapping' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesActionsFork',
        'signersMapping',
        signersMapping,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/actions/fork`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (title !== undefined) {
        localVarFormParams.append('title', title as any);
      }

      if (description !== undefined) {
        localVarFormParams.append('description', description as any);
      }

      if (kind !== undefined) {
        localVarFormParams.append('kind', kind as any);
      }
      if (signersMapping) {
        localVarFormParams.append(
          'signersMapping',
          signersMapping.join(COLLECTION_FORMATS.csv),
        );
      }

      if (ccRecipientsMapping) {
        localVarFormParams.append(
          'ccRecipientsMapping',
          ccRecipientsMapping.join(COLLECTION_FORMATS.csv),
        );
      }

      if (documentFieldMappings) {
        localVarFormParams.append(
          'documentFieldMappings',
          documentFieldMappings.join(COLLECTION_FORMATS.csv),
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a ccRecipient in the eSignature template, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Create a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplateRecipient} eSignatureTemplateRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsCreate: async (
      eSignatureTemplateId: string,
      eSignatureTemplateRecipient: ESignatureTemplateRecipient,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsCreate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'eSignatureTemplateRecipient' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsCreate',
        'eSignatureTemplateRecipient',
        eSignatureTemplateRecipient,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/cc-recipients`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplateRecipient,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Delete a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsDelete: async (
      eSignatureTemplateId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsDelete',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesCcRecipientsDelete', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/cc-recipients/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List all cc-recipients
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsList: async (
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsList',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/cc-recipients`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsRetrieve: async (
      eSignatureTemplateId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsRetrieve',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesCcRecipientsRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/cc-recipients/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Update a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {ESignatureTemplatesCcRecipientsUpdateParams} eSignatureTemplatesCcRecipientsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsUpdate: async (
      eSignatureTemplateId: string,
      id: string,
      eSignatureTemplatesCcRecipientsUpdateParams: ESignatureTemplatesCcRecipientsUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsUpdate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesCcRecipientsUpdate', 'id', id);
      // verify required parameter 'eSignatureTemplatesCcRecipientsUpdateParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCcRecipientsUpdate',
        'eSignatureTemplatesCcRecipientsUpdateParams',
        eSignatureTemplatesCcRecipientsUpdateParams,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/cc-recipients/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesCcRecipientsUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Creates an eSignature template
     * @summary Create a template
     * @param {ESignatureTemplatesCreateParams} eSignatureTemplatesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCreate: async (
      eSignatureTemplatesCreateParams: ESignatureTemplatesCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplatesCreateParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesCreate',
        'eSignatureTemplatesCreateParams',
        eSignatureTemplatesCreateParams,
      );
      const localVarPath = `/e-signature-templates`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Deletes the eSignature template
     * @summary Delete a template
     * @param {string} id Id of the eSignature template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDelete: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesDelete', 'id', id);
      const localVarPath = `/e-signature-templates/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Reorder documents given a referenced array of document ids.
     * @summary Reorder documents
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplatesDocumentsReorderParams} eSignatureTemplatesDocumentsReorderParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsActionsReorder: async (
      eSignatureTemplateId: string,
      eSignatureTemplatesDocumentsReorderParams: ESignatureTemplatesDocumentsReorderParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsActionsReorder',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'eSignatureTemplatesDocumentsReorderParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsActionsReorder',
        'eSignatureTemplatesDocumentsReorderParams',
        eSignatureTemplatesDocumentsReorderParams,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/actions/reorder`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesDocumentsReorderParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a document in the eSignature template
     * @summary Create a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} name Name of the document
     * @param {(Buffer | ReadStream)} [data] Only required if the KIND is regular
     * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsCreate: async (
      eSignatureTemplateId: string,
      name: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsCreate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'name' is not null or undefined
      assertParamExists('eSignatureTemplatesDocumentsCreate', 'name', name);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (name !== undefined) {
        localVarFormParams.append('name', name as any);
      }

      if (data !== undefined) {
        localVarFormParams.append('data', data as any);
      }
      if (pageRotations) {
        localVarFormParams.append(
          'pageRotations',
          pageRotations.join(COLLECTION_FORMATS.csv),
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete a document in an eSignature template
     * @summary Delete a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsDelete: async (
      eSignatureTemplateId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsDelete',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesDocumentsDelete', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Bulk create entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Bulk create entry pads
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureTemplatesDocumentsEntryPadsBulkCreateParams} eSignatureTemplatesDocumentsEntryPadsBulkCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate: async (
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureTemplatesDocumentsEntryPadsBulkCreateParams: ESignatureTemplatesDocumentsEntryPadsBulkCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate',
        'documentId',
        documentId,
      );
      // verify required parameter 'eSignatureTemplatesDocumentsEntryPadsBulkCreateParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate',
        'eSignatureTemplatesDocumentsEntryPadsBulkCreateParams',
        eSignatureTemplatesDocumentsEntryPadsBulkCreateParams,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads/actions/bulk-create`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesDocumentsEntryPadsBulkCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Bulk delete entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Bulk delete entry pads
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams} eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete: async (
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams: ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete',
        'documentId',
        documentId,
      );
      // verify required parameter 'eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete',
        'eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams',
        eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads/actions/bulk-delete`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureEntryPad} eSignatureEntryPad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsCreate: async (
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureEntryPad: ESignatureEntryPad,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsCreate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsCreate',
        'documentId',
        documentId,
      );
      // verify required parameter 'eSignatureEntryPad' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsCreate',
        'eSignatureEntryPad',
        eSignatureEntryPad,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureEntryPad,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsDelete: async (
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsDelete',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsDelete',
        'documentId',
        documentId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsDelete',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List entry pads in a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsList: async (
      eSignatureTemplateId: string,
      documentId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsList',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsList',
        'documentId',
        documentId,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsRetrieve: async (
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsRetrieve',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsRetrieve',
        'documentId',
        documentId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsRetrieve',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {ESignatureTemplatesDocumentsEntryPadsUpdateParams} eSignatureTemplatesDocumentsEntryPadsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsUpdate: async (
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      eSignatureTemplatesDocumentsEntryPadsUpdateParams: ESignatureTemplatesDocumentsEntryPadsUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsUpdate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'documentId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsUpdate',
        'documentId',
        documentId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsUpdate',
        'id',
        id,
      );
      // verify required parameter 'eSignatureTemplatesDocumentsEntryPadsUpdateParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsEntryPadsUpdate',
        'eSignatureTemplatesDocumentsEntryPadsUpdateParams',
        eSignatureTemplatesDocumentsEntryPadsUpdateParams,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{documentId}/entry-pads/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'documentId'}}`, encodeURIComponent(String(documentId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesDocumentsEntryPadsUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List all the documents that are part of this eSignature template
     * @summary List all documents
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsList: async (
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsList',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsRetrieve: async (
      eSignatureTemplateId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsRetrieve',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesDocumentsRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update the document in an eSignature template
     * @summary Update a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {string} [name] Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations]
     * @param {Array<EasySignInput>} [easySignInputs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsUpdate: async (
      eSignatureTemplateId: string,
      id: string,
      name?: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      easySignInputs?: Array<EasySignInput>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesDocumentsUpdate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesDocumentsUpdate', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/documents/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (name !== undefined) {
        localVarFormParams.append('name', name as any);
      }

      if (data !== undefined) {
        localVarFormParams.append('data', data as any);
      }
      if (pageRotations) {
        localVarFormParams.append(
          'pageRotations',
          pageRotations.join(COLLECTION_FORMATS.csv),
        );
      }

      if (easySignInputs) {
        localVarFormParams.append(
          'easySignInputs',
          easySignInputs.join(COLLECTION_FORMATS.csv),
        );
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
     * @summary List all templates
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesList: async (
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/e-signature-templates`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a template
     * @param {string} id Id of the eSignature template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesRetrieve: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesRetrieve', 'id', id);
      const localVarPath = `/e-signature-templates/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create an attachment request for for a signer.
     * @summary Create an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsCreate: async (
      eSignatureTemplateId: string,
      signerId: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsCreate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsCreate',
        'signerId',
        signerId,
      );
      // verify required parameter 'eSignatureSignerAttachmentRequest' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsCreate',
        'eSignatureSignerAttachmentRequest',
        eSignatureSignerAttachmentRequest,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{signerId}/attachment-requests`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureSignerAttachmentRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Delete an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsDelete: async (
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsDelete',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsDelete',
        'signerId',
        signerId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsDelete',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{signerId}/attachment-requests/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List attachment requests
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsList: async (
      eSignatureTemplateId: string,
      signerId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsList',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsList',
        'signerId',
        signerId,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{signerId}/attachment-requests`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsRetrieve: async (
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsRetrieve',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsRetrieve',
        'signerId',
        signerId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsRetrieve',
        'id',
        id,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{signerId}/attachment-requests/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsUpdate: async (
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsUpdate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'signerId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsUpdate',
        'signerId',
        signerId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsUpdate',
        'id',
        id,
      );
      // verify required parameter 'eSignatureSignerAttachmentRequest' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersAttachmentRequestsUpdate',
        'eSignatureSignerAttachmentRequest',
        eSignatureSignerAttachmentRequest,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{signerId}/attachment-requests/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'signerId'}}`, encodeURIComponent(String(signerId)))
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureSignerAttachmentRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a signer in the eSignature template.
     * @summary Create a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersCreate: async (
      eSignatureTemplateId: string,
      eSignatureTemplateSigner: ESignatureTemplateSigner,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersCreate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'eSignatureTemplateSigner' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersCreate',
        'eSignatureTemplateSigner',
        eSignatureTemplateSigner,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplateSigner,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Remove the signer for the template. Also removes their respective entry pads.
     * @summary Delete a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersDelete: async (
      eSignatureTemplateId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersDelete',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesSignersDelete', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List all signers
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersList: async (
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersList',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers`.replace(
          `{${'eSignatureTemplateId'}}`,
          encodeURIComponent(String(eSignatureTemplateId)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersRetrieve: async (
      eSignatureTemplateId: string,
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersRetrieve',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesSignersRetrieve', 'id', id);
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersUpdate: async (
      eSignatureTemplateId: string,
      id: string,
      eSignatureTemplateSigner: ESignatureTemplateSigner,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplateId' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersUpdate',
        'eSignatureTemplateId',
        eSignatureTemplateId,
      );
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesSignersUpdate', 'id', id);
      // verify required parameter 'eSignatureTemplateSigner' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesSignersUpdate',
        'eSignatureTemplateSigner',
        eSignatureTemplateSigner,
      );
      const localVarPath =
        `/e-signature-templates/{eSignatureTemplateId}/signers/{id}`
          .replace(
            `{${'eSignatureTemplateId'}}`,
            encodeURIComponent(String(eSignatureTemplateId)),
          )
          .replace(`{${'id'}}`, encodeURIComponent(String(id)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplateSigner,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Share a new eSignature Template to the team. Only the owner of the template can share it with the team.
     * @summary Share owned template with the team
     * @param {ESignatureTemplatesTeamTemplatesCreateParams} eSignatureTemplatesTeamTemplatesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesTeamTemplatesCreate: async (
      eSignatureTemplatesTeamTemplatesCreateParams: ESignatureTemplatesTeamTemplatesCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'eSignatureTemplatesTeamTemplatesCreateParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesTeamTemplatesCreate',
        'eSignatureTemplatesTeamTemplatesCreateParams',
        eSignatureTemplatesTeamTemplatesCreateParams,
      );
      const localVarPath = `/e-signature-templates/team-templates`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesTeamTemplatesCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Remove a template from the template. Must be the owner of the template, or the owner or admin of the team
     * @summary Remove template from the team
     * @param {string} id ID of template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesTeamTemplatesDelete: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesTeamTemplatesDelete', 'id', id);
      const localVarPath = `/e-signature-templates/team-templates/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List all the signature templates that belong to the team that the requester is part of.
     * @summary List all signature templates that belong to a team
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {string} [teamId] The user must belong to the team; not required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesTeamTemplatesList: async (
      limit?: number,
      skip?: number,
      teamId?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/e-signature-templates/team-templates`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      if (teamId !== undefined) {
        localVarQueryParameter['teamId'] = teamId;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update an eSignature template.
     * @summary Update a template
     * @param {string} id Id of the eSignature template
     * @param {ESignatureTemplatesUpdateParams} eSignatureTemplatesUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesUpdate: async (
      id: string,
      eSignatureTemplatesUpdateParams: ESignatureTemplatesUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('eSignatureTemplatesUpdate', 'id', id);
      // verify required parameter 'eSignatureTemplatesUpdateParams' is not null or undefined
      assertParamExists(
        'eSignatureTemplatesUpdate',
        'eSignatureTemplatesUpdateParams',
        eSignatureTemplatesUpdateParams,
      );
      const localVarPath = `/e-signature-templates/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        eSignatureTemplatesUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Can only cancel if the package is the `IN PROGRESS` status
     * @summary Cancel an identity verification package
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsCancel: async (
      id: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsCancel', 'id', id);
      const localVarPath = `/identity-verifications/{id}/cancel`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Create an identity verification package
     * @param {IdentityVerificationsCreateParams} [identityVerificationsCreateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsCreate: async (
      identityVerificationsCreateParams?: IdentityVerificationsCreateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/identity-verifications`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        identityVerificationsCreateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Delete an identity verification package specified by id
     * @param {string} id ID of identity verification package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsDelete: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsDelete', 'id', id);
      const localVarPath = `/identity-verifications/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'DELETE',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a link to download the audit trail.
     * @summary Obtain download link for audit trail
     * @param {string} id ID of the verification package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsDownloadAuditTrail: async (
      id: string,
      duration?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsDownloadAuditTrail', 'id', id);
      const localVarPath =
        `/identity-verifications/{id}/download-audit-trail`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(id)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (duration !== undefined) {
        localVarFormParams.append('duration', duration as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary List identity verification packages that belong to the user
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {Array<string>} [ids] Ids of elements to return as list
     * @param {boolean} [standalone] Returns IDV packages that are not linked to any other items (i.e. linked to signer 2FA or eNotary Package)
     * @param {IdentityVerificationStatusEnum} [status]
     * @param {Array<IdentityVerificationStatusEnum>} [statuses]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsList: async (
      limit?: number,
      skip?: number,
      ids?: Array<string>,
      standalone?: boolean,
      status?: IdentityVerificationStatusEnum,
      statuses?: Array<IdentityVerificationStatusEnum>,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/identity-verifications`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      if (ids) {
        localVarQueryParameter['ids'] = ids;
      }

      if (standalone !== undefined) {
        localVarQueryParameter['standalone'] = standalone;
      }

      if (status !== undefined) {
        localVarQueryParameter['status'] = status;
      }

      if (statuses) {
        localVarQueryParameter['statuses'] = statuses;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieve advanced options for an identity verification package
     * @summary Retrieve advanced options for an identity verification package
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsObtainAdvancedOptions: async (
      id: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsObtainAdvancedOptions', 'id', id);
      const localVarPath =
        `/identity-verifications/{id}/obtain-advanced-options`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(id)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get a link with a smart token to authenticate respondent
     * @param {string} id ID of the verification package
     * @param {IdentityVerificationsObtainRespondentLinkRequestParams} [identityVerificationsObtainRespondentLinkRequestParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsObtainRespondentLink: async (
      id: string,
      identityVerificationsObtainRespondentLinkRequestParams?: IdentityVerificationsObtainRespondentLinkRequestParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsObtainRespondentLink', 'id', id);
      const localVarPath =
        `/identity-verifications/{id}/obtain-respondent-link`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(id)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        identityVerificationsObtainRespondentLinkRequestParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Retrieve an identity verification package
     * @param {string} id ID of identity verification package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsRetrieve: async (
      id: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsRetrieve', 'id', id);
      const localVarPath = `/identity-verifications/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Start an id verification
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsStart: async (
      id: string,
      body?: object,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsStart', 'id', id);
      const localVarPath = `/identity-verifications/{id}/start`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        body,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Submit a document for verification
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} frontImage
     * @param {IdentityVerificationDocumentTypeEnum} documentType
     * @param {string} documentCountry
     * @param {(Buffer | ReadStream)} [backImage]
     * @param {string} [documentState]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsSubmitDocument: async (
      id: string,
      frontImage: Buffer | ReadStream,
      documentType: IdentityVerificationDocumentTypeEnum,
      documentCountry: string,
      backImage?: Buffer | ReadStream,
      documentState?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsSubmitDocument', 'id', id);
      // verify required parameter 'frontImage' is not null or undefined
      assertParamExists(
        'identityVerificationsSubmitDocument',
        'frontImage',
        frontImage,
      );
      // verify required parameter 'documentType' is not null or undefined
      assertParamExists(
        'identityVerificationsSubmitDocument',
        'documentType',
        documentType,
      );
      // verify required parameter 'documentCountry' is not null or undefined
      assertParamExists(
        'identityVerificationsSubmitDocument',
        'documentCountry',
        documentCountry,
      );
      const localVarPath =
        `/identity-verifications/{id}/submit-document`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(id)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (frontImage !== undefined) {
        localVarFormParams.append('frontImage', frontImage as any);
      }

      if (backImage !== undefined) {
        localVarFormParams.append('backImage', backImage as any);
      }

      if (documentType !== undefined) {
        localVarFormParams.append('documentType', documentType as any);
      }

      if (documentCountry !== undefined) {
        localVarFormParams.append('documentCountry', documentCountry as any);
      }

      if (documentState !== undefined) {
        localVarFormParams.append('documentState', documentState as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update an identity verification package. Package must be in `DRAFT`
     * @param {string} id ID of identity verification package
     * @param {IdentityVerificationsUpdateParams} identityVerificationsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsUpdate: async (
      id: string,
      identityVerificationsUpdateParams: IdentityVerificationsUpdateParams,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsUpdate', 'id', id);
      // verify required parameter 'identityVerificationsUpdateParams' is not null or undefined
      assertParamExists(
        'identityVerificationsUpdate',
        'identityVerificationsUpdateParams',
        identityVerificationsUpdateParams,
      );
      const localVarPath = `/identity-verifications/{id}`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        identityVerificationsUpdateParams,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Add a video to verify liveness of the selfie
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} livenessVideo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsUploadLiveness: async (
      id: string,
      livenessVideo: Buffer | ReadStream,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsUploadLiveness', 'id', id);
      // verify required parameter 'livenessVideo' is not null or undefined
      assertParamExists(
        'identityVerificationsUploadLiveness',
        'livenessVideo',
        livenessVideo,
      );
      const localVarPath =
        `/identity-verifications/{id}/upload-liveness`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(id)),
        );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (livenessVideo !== undefined) {
        localVarFormParams.append('livenessVideo', livenessVideo as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Add a selfie to verify documents against
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} selfie
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsUploadSelfie: async (
      id: string,
      selfie: Buffer | ReadStream,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('identityVerificationsUploadSelfie', 'id', id);
      // verify required parameter 'selfie' is not null or undefined
      assertParamExists('identityVerificationsUploadSelfie', 'selfie', selfie);
      const localVarPath = `/identity-verifications/{id}/upload-selfie`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (selfie !== undefined) {
        localVarFormParams.append('selfie', selfie as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...(localVarFormParams as any).getHeaders?.(),
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List all members that are part of the specified team
     * @summary List all members
     * @param {string} teamId Id of the team
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsMembersList: async (
      teamId: string,
      limit?: number,
      skip?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'teamId' is not null or undefined
      assertParamExists('teamsMembersList', 'teamId', teamId);
      const localVarPath = `/teams/{teamId}/members`.replace(
        `{${'teamId'}}`,
        encodeURIComponent(String(teamId)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication DefaultAuthentication required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit;
      }

      if (skip !== undefined) {
        localVarQueryParameter['skip'] = skip;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * PactimaApi - functional programming interface
 * @export
 */
export const PactimaApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = PactimaApiAxiosParamCreator(configuration);
  return {
    /**
     * Cannot reset the authentication if the respective eSignature package is in a terminal status (i.e. COMPLETED, DECLINED, CANCELED) or Locked status (LOCKED_FOR_REVIEW)
     * @summary Reset the authentication of the eNotary package
     * @param {string} eNotaryPackageId Id of eNotary package
     * @param {ENotaryPackagesActionsResetAuthenticationParams} [eNotaryPackagesActionsResetAuthenticationParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesActionsResetAuthentication(
      eNotaryPackageId: string,
      eNotaryPackagesActionsResetAuthenticationParams?: ENotaryPackagesActionsResetAuthenticationParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ENotaryPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesActionsResetAuthentication(
          eNotaryPackageId,
          eNotaryPackagesActionsResetAuthenticationParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eNotaryPackagesActionsResetAuthentication'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Can create afresh or have linked eSignature package can be LIVE (for RON) or IN_PERSON (for IPEN)
     * @summary Create an eNotary package
     * @param {ENotaryPackagesCreateParams} [eNotaryPackagesCreateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesCreate(
      eNotaryPackagesCreateParams?: ENotaryPackagesCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ENotaryPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesCreate(
          eNotaryPackagesCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eNotaryPackagesCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Delete an eNotary package
     * @param {string} id eNotary package id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesDelete(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesDelete(id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eNotaryPackagesDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download the eNotary journal. This operation is only valid if the respective eSignature package is in COMPLETED status
     * @summary Obtain eNotary journal download link
     * @param {string} eNotaryPackageId Id of eNotary package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesJournalActionsDownload(
      eNotaryPackageId: string,
      duration?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesJournalActionsDownload(
          eNotaryPackageId,
          duration,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eNotaryPackagesJournalActionsDownload'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List eNotary Packages
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesList(
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ENotaryPackagesListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesList(
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eNotaryPackagesList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an eNotary package
     * @param {string} id eNotary package id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesRetrieve(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ENotaryPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesRetrieve(id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eNotaryPackagesRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Can only update if the respective eSignature package is in DRAFT or LIVE_EDITING mode
     * @summary Update an eNotary package
     * @param {string} id eNotary package id
     * @param {ENotaryPackagesUpdateParams} [eNotaryPackagesUpdateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesUpdate(
      id: string,
      eNotaryPackagesUpdateParams?: ENotaryPackagesUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ENotaryPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesUpdate(
          id,
          eNotaryPackagesUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eNotaryPackagesUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Create a validation request for a particular signer
     * @param {string} id eNotary package id
     * @param {ENotaryPackageValidationRequest} [eNotaryPackageValidationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesValidationRequestsCreate(
      id: string,
      eNotaryPackageValidationRequest?: ENotaryPackageValidationRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ENotaryPackageValidationRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesValidationRequestsCreate(
          id,
          eNotaryPackageValidationRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eNotaryPackagesValidationRequestsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The respective Live eSignature of eNotary package must be in DRAFT status
     * @summary Delete a validation request for an eNotary package
     * @param {string} id eNotary package id
     * @param {string} signerId id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesValidationRequestsDelete(
      id: string,
      signerId: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesValidationRequestsDelete(
          id,
          signerId,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eNotaryPackagesValidationRequestsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Can only update if the respective eSignature package is in DRAFT status
     * @summary Update the validation request of a signer
     * @param {string} id eNotary package id
     * @param {string} signerId id of the signer
     * @param {ENotaryPackagesValidationRequestsUpdateParams} [eNotaryPackagesValidationRequestsUpdateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eNotaryPackagesValidationRequestsUpdate(
      id: string,
      signerId: string,
      eNotaryPackagesValidationRequestsUpdateParams?: ENotaryPackagesValidationRequestsUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ENotaryPackageValidationRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eNotaryPackagesValidationRequestsUpdate(
          id,
          signerId,
          eNotaryPackagesValidationRequestsUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eNotaryPackagesValidationRequestsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Cancels an eSignature package. The package cannot be in `DRAFT` or `COMPLETED` status.
     * @summary Cancel the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsCancel(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsCancel(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsCancel']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a template from the eSignature package
     * @summary Create a template
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} title Name/title of the template
     * @param {Array<ESignaturePackagesActionsCreateTemplateSignersMapping>} signersMapping
     * @param {string} [description] Description of the template
     * @param {Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>} [ccRecipientsMapping]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsCreateTemplate(
      eSignaturePackageId: string,
      title: string,
      signersMapping: Array<ESignaturePackagesActionsCreateTemplateSignersMapping>,
      description?: string,
      ccRecipientsMapping?: Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsCreateTemplate(
          eSignaturePackageId,
          title,
          signersMapping,
          description,
          ccRecipientsMapping,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsCreateTemplate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Disable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
     * @summary Disable recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsDisableRecording(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsDisableRecording(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsDisableRecording'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download the eSignature package. This only provides access to the signed portion of the package, it does not include attachments, audit trials, etc.
     * @summary Obtain a download link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackageDownloadFormatEnum} [format]
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {string} [customPkiCertificateId] Id of the PKI certificate that belongs to the owner the eSignature package
     * @param {ESignatureIdHeaderLocationEnum} [idHeaderLocation]
     * @param {boolean} [isAsync] If true, will send an email to the participant once the download is ready
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsDownload(
      eSignaturePackageId: string,
      format?: ESignaturePackageDownloadFormatEnum,
      duration?: string,
      customPkiCertificateId?: string,
      idHeaderLocation?: ESignatureIdHeaderLocationEnum,
      isAsync?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsDownload(
          eSignaturePackageId,
          format,
          duration,
          customPkiCertificateId,
          idHeaderLocation,
          isAsync,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsDownload']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download to obtain the audit trails
     * @summary Obtain audit trails download link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {string} [locale]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsDownloadAuditTrails(
      eSignaturePackageId: string,
      duration?: string,
      locale?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsDownloadAuditTrails(
          eSignaturePackageId,
          duration,
          locale,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsDownloadAuditTrails'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Enable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
     * @summary Enable recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsEnableRecording(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsEnableRecording(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsEnableRecording'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * For `LIVE` eSignature packages that have been completed, the signing session can be ended to terminate the video conference (and move participants to the exit workflow if applicable).
     * @summary End a signing session
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsEndSigningSession(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsEndSigningSession(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsEndSigningSession'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Start a DRAFT e-signature package immediately
     * @summary Start a DRAFT e-signature package immediately
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsExpressStart(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsExpressStart(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsExpressStart'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Forward a `COMPLETED` eSignature package by email
     * @summary Forward an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsForwardParams} [eSignaturePackagesActionsForwardParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsForward(
      eSignaturePackageId: string,
      eSignaturePackagesActionsForwardParams?: ESignaturePackagesActionsForwardParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsForward(
          eSignaturePackageId,
          eSignaturePackagesActionsForwardParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsForward']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
     * @summary Modify advanced options of an in-flight eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsModifyAdvancedOptionsParams} [eSignaturePackagesActionsModifyAdvancedOptionsParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsModifyAdvancedOptions(
      eSignaturePackageId: string,
      eSignaturePackagesActionsModifyAdvancedOptionsParams?: ESignaturePackagesActionsModifyAdvancedOptionsParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsModifyAdvancedOptions(
          eSignaturePackageId,
          eSignaturePackagesActionsModifyAdvancedOptionsParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsModifyAdvancedOptions'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
     * @summary Modify metadata options of an in-flight eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsModifyMetadataParams} [eSignaturePackagesActionsModifyMetadataParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsModifyMetadata(
      eSignaturePackageId: string,
      eSignaturePackagesActionsModifyMetadataParams?: ESignaturePackagesActionsModifyMetadataParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsModifyMetadata(
          eSignaturePackageId,
          eSignaturePackagesActionsModifyMetadataParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsModifyMetadata'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Retrieve advanced options for an eSignature package
     * @summary Retrieve advanced options for an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsObtainAdvancedOptions(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureAdvancedOptions>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsObtainAdvancedOptions(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsObtainAdvancedOptions'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link that can be used to request the package. The package must be in `DRAFT` status.
     * @summary Obtain link that can be used to prepare the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesObtainPreparationLinkParams} [eSignaturePackagesObtainPreparationLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsObtainPreparationLink(
      eSignaturePackageId: string,
      eSignaturePackagesObtainPreparationLinkParams?: ESignaturePackagesObtainPreparationLinkParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesObtainPreparationLinkResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsObtainPreparationLink(
          eSignaturePackageId,
          eSignaturePackagesObtainPreparationLinkParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsObtainPreparationLink'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Redraft sets the eSignature back to the `DRAFT` status to allow modifications. Signers who have agreed and finalized, will have to re-perform their agreement, however their response are still saved.
     * @summary Redraft the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsRedraft(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsRedraft(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsRedraft']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Reschedule a LIVE eSignature package. It must be in `LIVE` or `SCHEDULED` status
     * @summary Reschedule a LIVE eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsRescheduleParams} eSignaturePackagesActionsRescheduleParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsReschedule(
      eSignaturePackageId: string,
      eSignaturePackagesActionsRescheduleParams: ESignaturePackagesActionsRescheduleParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsReschedule(
          eSignaturePackageId,
          eSignaturePackagesActionsRescheduleParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsReschedule']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Reuse an completed eSignature package to create a draft eSignature package
     * @summary Reuse an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} [owner] ID of the owner of the newly created package. Defaults to owner of the current eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsReuse(
      eSignaturePackageId: string,
      owner?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsReuse(
          eSignaturePackageId,
          owner,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsReuse']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Retrieve via file-server to ensure that returns large (i.e. > 6MB)
     * @summary Safely retrieve an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {boolean} [enforcePreventAccessByMaskedRequesterConfig] If true, will enforce the prevent access by masked requester config in the eSignatures advanced options
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsSafeRetrieve(
      eSignaturePackageId: string,
      enforcePreventAccessByMaskedRequesterConfig?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsSafeRetrieve(
          eSignaturePackageId,
          enforcePreventAccessByMaskedRequesterConfig,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsSafeRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Start the signing session for `LIVE` eSignature packages in the `SCHEDULED` status moving it to the `LIVE` status; moves the `IN_PERSON` eSignature package from `PREPARED` to `ACTIVE`
     * @summary Start the signing session
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsStartSigningSession(
      eSignaturePackageId: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsStartSigningSession(
          eSignaturePackageId,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesActionsStartSigningSession'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This endpoint is used to \"re-trigger\", i.e. change the particular kind of the package. Here are the conditions for trigger:\\ - For `LIVE` packages, the status must be `LIVE` or `SCHEDULED` - For `STANDARD` packages, the status must be `SENT`, and - For `IN_PERSON` packages, the status must be `ACTIVE` or `PREPARED`
     * @summary Change the kind of the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsSwitchKindParams} [eSignaturePackagesActionsSwitchKindParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsSwitchKind(
      eSignaturePackageId: string,
      eSignaturePackagesActionsSwitchKindParams?: ESignaturePackagesActionsSwitchKindParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsSwitchKind(
          eSignaturePackageId,
          eSignaturePackagesActionsSwitchKindParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsSwitchKind']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Transfer an eSignature package to another user that is part of the same team
     * @summary Transfer an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsTransferParams} eSignaturePackagesActionsTransferParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsTransfer(
      eSignaturePackageId: string,
      eSignaturePackagesActionsTransferParams: ESignaturePackagesActionsTransferParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsTransfer(
          eSignaturePackageId,
          eSignaturePackagesActionsTransferParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsTransfer']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Once an eSignature package have been fully drafted, it has to be triggered to start the signing. For `STANDARD` eSignature packages, move to `SENT`; `LIVE` eSignature packages move to `SCHEDULED`; and `IN_PERSON` move to `PREPARED`.
     * @summary Trigger a DRAFT eSignature package for signing
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsTriggerParams} [eSignaturePackagesActionsTriggerParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsTrigger(
      eSignaturePackageId: string,
      eSignaturePackagesActionsTriggerParams?: ESignaturePackagesActionsTriggerParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsTrigger(
          eSignaturePackageId,
          eSignaturePackagesActionsTriggerParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsTrigger']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Upload a zip file to an eSignature package
     * @summary Upload a zip file
     * @param {string} eSignaturePackageId
     * @param {(Buffer | ReadStream)} [data] The zip file to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesActionsZipUpload(
      eSignaturePackageId: string,
      data?: Buffer | ReadStream,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesActionsZipUpload(
          eSignaturePackageId,
          data,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesActionsZipUpload']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download the original attachment
     * @summary Obtain a download link of a specific attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachments
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesAttachmentsActionsDownload(
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesAttachmentsActionsDownload(
          eSignaturePackageId,
          id,
          duration,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesAttachmentsActionsDownload'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create an attachment in the eSignature package, which must be in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Create an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} filename
     * @param {(Buffer | ReadStream)} data
     * @param {boolean} [isConfidential]
     * @param {string} [requestId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesAttachmentsCreate(
      eSignaturePackageId: string,
      filename: string,
      data: Buffer | ReadStream,
      isConfidential?: boolean,
      requestId?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureAttachment>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesAttachmentsCreate(
          eSignaturePackageId,
          filename,
          data,
          isConfidential,
          requestId,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesAttachmentsCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Delete an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesAttachmentsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesAttachmentsDelete(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesAttachmentsDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List the attachments in the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 500.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesAttachmentsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesAttachmentsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesAttachmentsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesAttachmentsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesAttachmentsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureAttachment>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesAttachmentsRetrieve(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesAttachmentsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Only updates the metadata of attachment. This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Update an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {ESignaturePackagesAttachmentsUpdate} eSignaturePackagesAttachmentsUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesAttachmentsUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesAttachmentsUpdate: ESignaturePackagesAttachmentsUpdate,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureAttachment>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesAttachmentsUpdate(
          eSignaturePackageId,
          id,
          eSignaturePackagesAttachmentsUpdate,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesAttachmentsUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Obtain a secure link to be used for a ccRecipient who has a special role as OBSERVER or OBSERVER_ONLY. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED).
     * @summary Obtain observer link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of ccRecipient
     * @param {ESignaturePackagesCCRecipientsObtainObserverLinkParams} [eSignaturePackagesCCRecipientsObtainObserverLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCcRecipientsActionsObtainObserverLink(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesCCRecipientsObtainObserverLinkParams?: ESignaturePackagesCCRecipientsObtainObserverLinkParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesCCRecipientsObtainObserverLinkResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCcRecipientsActionsObtainObserverLink(
          eSignaturePackageId,
          id,
          eSignaturePackagesCCRecipientsObtainObserverLinkParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesCcRecipientsActionsObtainObserverLink'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a ccRecipient in the eSignature package, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Create a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureCCRecipient} eSignatureCCRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCcRecipientsCreate(
      eSignaturePackageId: string,
      eSignatureCCRecipient: ESignatureCCRecipient,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureCCRecipient>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCcRecipientsCreate(
          eSignaturePackageId,
          eSignatureCCRecipient,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesCcRecipientsCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Delete a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCcRecipientsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCcRecipientsDelete(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesCcRecipientsDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List all cc-recipients
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCcRecipientsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesCcRecipientsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCcRecipientsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesCcRecipientsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCcRecipientsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureCCRecipient>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCcRecipientsRetrieve(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesCcRecipientsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Update a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {ESignatureCCRecipient} eSignatureCCRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCcRecipientsUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignatureCCRecipient: ESignatureCCRecipient,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureCCRecipient>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCcRecipientsUpdate(
          eSignaturePackageId,
          id,
          eSignatureCCRecipient,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesCcRecipientsUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Creates an eSignature package and sets it initially in the `DRAFT` status.
     * @summary Create an eSignature package
     * @param {ESignaturePackagesCreateParams} eSignaturePackagesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesCreate(
      eSignaturePackagesCreateParams: ESignaturePackagesCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesCreate(
          eSignaturePackagesCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Deletes the eSignature package if it in the `DRAFT` or `CANCELLED` statuses. If the eSignature package is in the `COMPLETED` it will be deleted from the account, but archived according Pactima\'s retention policy.
     * @summary Delete an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDelete(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDelete(id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Apply eSignature template fields to specific document. The document must be in a `DRAFT` or `LIVE_EDITING` status
     * @summary Apply template fields to specific document
     * @param {string} eSignaturePackageId ID of ESignaturePackage
     * @param {string} id ID of document where fields need to be applied
     * @param {ESignaturePackagesDocumentsApplyTemplateParams} eSignaturePackagesDocumentsApplyTemplateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsActionsApplyTemplate(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesDocumentsApplyTemplateParams: ESignaturePackagesDocumentsApplyTemplateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsActionsApplyTemplate(
          eSignaturePackageId,
          id,
          eSignaturePackagesDocumentsApplyTemplateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsActionsApplyTemplate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download the PDF version of an uploaded document.
     * @summary Obtain a download link of a specific document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of document
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsActionsDownload(
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsActionsDownload(
          eSignaturePackageId,
          id,
          duration,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsActionsDownload'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Reorder documents given a referenced array of document ids. The package must be in a draft status, (i.e. DRAFT or LIVE_EDITING)
     * @summary Reorder documents
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesDocumentsReorderParams} eSignaturePackagesDocumentsReorderParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsActionsReorder(
      eSignaturePackageId: string,
      eSignaturePackagesDocumentsReorderParams: ESignaturePackagesDocumentsReorderParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsActionsReorder(
          eSignaturePackageId,
          eSignaturePackagesDocumentsReorderParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsActionsReorder'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a document in the eSignature package, the latter must be in either `DRAFT` or `LIVE_EDITING` status.
     * @summary Create a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} name Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsCreate(
      eSignaturePackageId: string,
      name: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureDocument>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsCreate(
          eSignaturePackageId,
          name,
          data,
          pageRotations,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesDocumentsCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsDelete(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesDocumentsDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
     * @summary Create multiple entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignaturePackagesDocumentsEntryPadsBulkCreateParams} eSignaturePackagesDocumentsEntryPadsBulkCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsActionsBulkCreate(
      eSignaturePackageId: string,
      documentId: string,
      eSignaturePackagesDocumentsEntryPadsBulkCreateParams: ESignaturePackagesDocumentsEntryPadsBulkCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesDocumentsEntryPadsBulkCreateResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsActionsBulkCreate(
          eSignaturePackageId,
          documentId,
          eSignaturePackagesDocumentsEntryPadsBulkCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsActionsBulkCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Delete an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
     * @summary Delete multiple entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignaturePackagesDocumentsEntryPadsBulkDeleteParams} eSignaturePackagesDocumentsEntryPadsBulkDeleteParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsActionsBulkDelete(
      eSignaturePackageId: string,
      documentId: string,
      eSignaturePackagesDocumentsEntryPadsBulkDeleteParams: ESignaturePackagesDocumentsEntryPadsBulkDeleteParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<GenericResponseDelete>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsActionsBulkDelete(
          eSignaturePackageId,
          documentId,
          eSignaturePackagesDocumentsEntryPadsBulkDeleteParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsActionsBulkDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignatureEntryPad} eSignatureEntryPad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsCreate(
      eSignaturePackageId: string,
      documentId: string,
      eSignatureEntryPad: ESignatureEntryPad,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureEntryPad>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsCreate(
          eSignaturePackageId,
          documentId,
          eSignatureEntryPad,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsDelete(
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsDelete(
          eSignaturePackageId,
          documentId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsList(
      eSignaturePackageId: string,
      documentId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesDocumentsEntryPadsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsList(
          eSignaturePackageId,
          documentId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsList'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsRetrieve(
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureEntryPad>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsRetrieve(
          eSignaturePackageId,
          documentId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {ESignaturePackagesDocumentsEntryPadsUpdateParams} eSignaturePackagesDocumentsEntryPadsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsEntryPadsUpdate(
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      eSignaturePackagesDocumentsEntryPadsUpdateParams: ESignaturePackagesDocumentsEntryPadsUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureEntryPad>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsEntryPadsUpdate(
          eSignaturePackageId,
          documentId,
          id,
          eSignaturePackagesDocumentsEntryPadsUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesDocumentsEntryPadsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all the documents that are part of this eSignature package
     * @summary List all documents
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesDocumentsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesDocumentsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureDocument>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsRetrieve(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesDocumentsRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {string} [name] Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations]
     * @param {Array<EasySignInput>} [easySignInputs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesDocumentsUpdate(
      eSignaturePackageId: string,
      id: string,
      name?: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      easySignInputs?: Array<EasySignInput>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureDocument>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesDocumentsUpdate(
          eSignaturePackageId,
          id,
          name,
          data,
          pageRotations,
          easySignInputs,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesDocumentsUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a joint signers groups in the eSignature package, only valid signers can be added to a joint signers group.
     * @summary Create a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureJointSignersGroup} eSignatureJointSignersGroup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesJointSignersGroupsCreate(
      eSignaturePackageId: string,
      eSignatureJointSignersGroup: ESignatureJointSignersGroup,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureJointSignersGroup>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesJointSignersGroupsCreate(
          eSignaturePackageId,
          eSignatureJointSignersGroup,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesJointSignersGroupsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Delete the specified joint signers group
     * @summary Delete a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesJointSignersGroupsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesJointSignersGroupsDelete(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesJointSignersGroupsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List all joint signers groups in an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesJointSignersGroupsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesJointSignersGroupsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesJointSignersGroupsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesJointSignersGroupsList'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesJointSignersGroupsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureJointSignersGroup>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesJointSignersGroupsRetrieve(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesJointSignersGroupsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update the specified joint signers group.
     * @summary Update a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {ESignaturePackagesJointSignersGroupsUpdateParams} eSignaturePackagesJointSignersGroupsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesJointSignersGroupsUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesJointSignersGroupsUpdateParams: ESignaturePackagesJointSignersGroupsUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureJointSignersGroup>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesJointSignersGroupsUpdate(
          eSignaturePackageId,
          id,
          eSignaturePackagesJointSignersGroupsUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesJointSignersGroupsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
     * @summary List all eSignature packages
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {ESignatureKindEnum} [kind] Filter packages by kind if provided
     * @param {boolean} [isENotary] If provided, will apply a filter to include (i.e. true) or exclude (i.e false) eNotary packages (i.e. IPEN or RON)
     * @param {boolean} [excludeBulkSentPackage] Determines whether to include eSignature packages that are part of a bulk send package
     * @param {string} [searchTerm] Text to search for eSignature packages
     * @param {string} [updatedAtStartDate] Filter packages updated on or after the specified date
     * @param {string} [updatedAtEndDate] Filter packages updated on or before the specified date
     * @param {Array<ESignatureStatusEnum>} [statuses] Filter packages by status
     * @param {Array<string>} [packageFolderIds]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesList(
      limit?: number,
      skip?: number,
      kind?: ESignatureKindEnum,
      isENotary?: boolean,
      excludeBulkSentPackage?: boolean,
      searchTerm?: string,
      updatedAtStartDate?: string,
      updatedAtEndDate?: string,
      statuses?: Array<ESignatureStatusEnum>,
      packageFolderIds?: Array<string>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesList(
          limit,
          skip,
          kind,
          isENotary,
          excludeBulkSentPackage,
          searchTerm,
          updatedAtStartDate,
          updatedAtEndDate,
          statuses,
          packageFolderIds,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download for a recording
     * @summary Obtain a download link of a specific recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the recording
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesRecordingsDownload(
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesRecordingsDownload(
          eSignaturePackageId,
          id,
          duration,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesRecordingsDownload']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List the recordings in the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 500.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesRecordingsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesRecordingsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesRecordingsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesRecordingsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesRecordingsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<LiveESignaturesVideoRecording>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesRecordingsRetrieve(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesRecordingsRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesRetrieve(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesRetrieve(id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Send a reminder to the signer by email.
     * @summary Send a reminder to a signer by email
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersActionsSendReminderByEmail(
      eSignaturePackageId: string,
      id: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersActionsSendReminderByEmail(
          eSignaturePackageId,
          id,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersActionsSendReminderByEmail'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Send a reminder to the signer by SMS.
     * @summary Send a reminder to a signer by SMS
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignaturePackagesSignersSendReminderBySMSParams} [eSignaturePackagesSignersSendReminderBySMSParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersActionsSendReminderBySMS(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesSignersSendReminderBySMSParams?: ESignaturePackagesSignersSendReminderBySMSParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersActionsSendReminderBySMS(
          eSignaturePackageId,
          id,
          eSignaturePackagesSignersSendReminderBySMSParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersActionsSendReminderBySMS'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create an attachment request for for a signer. This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the status is `SENT`, the signer should not have already SIGNED.
     * @summary Create an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersAttachmentRequestsCreate(
      eSignaturePackageId: string,
      signerId: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSignerAttachmentRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersAttachmentRequestsCreate(
          eSignaturePackageId,
          signerId,
          eSignatureSignerAttachmentRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersAttachmentRequestsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
     * @summary Delete a signer attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersAttachmentRequestsDelete(
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersAttachmentRequestsDelete(
          eSignaturePackageId,
          signerId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersAttachmentRequestsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List attachment requests
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersAttachmentRequestsList(
      eSignaturePackageId: string,
      signerId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesSignersAttachmentRequestsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersAttachmentRequestsList(
          eSignaturePackageId,
          signerId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersAttachmentRequestsList'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersAttachmentRequestsRetrieve(
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSignerAttachmentRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersAttachmentRequestsRetrieve(
          eSignaturePackageId,
          signerId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersAttachmentRequestsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
     * @summary Update an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersAttachmentRequestsUpdate(
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSignerAttachmentRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersAttachmentRequestsUpdate(
          eSignaturePackageId,
          signerId,
          id,
          eSignatureSignerAttachmentRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersAttachmentRequestsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a signer in the eSignature package, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureSignerENotary} eSignatureSignerENotary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersCreate(
      eSignaturePackageId: string,
      eSignatureSignerENotary: ESignatureSignerENotary,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSigner>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersCreate(
          eSignaturePackageId,
          eSignatureSignerENotary,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesSignersCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
     * @summary Delete a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersDelete(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersDelete(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesSignersDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List all signers
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesSignersListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesSignersList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Obtain a secure link to be used for signing. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED). The signer should
     * @summary Obtain signing link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignaturePackagesSignersObtainSigningLinkParams} [eSignaturePackagesSignersObtainSigningLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersObtainSigningLink(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesSignersObtainSigningLinkParams?: ESignaturePackagesSignersObtainSigningLinkParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackagesSignersObtainSigningLinkResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersObtainSigningLink(
          eSignaturePackageId,
          id,
          eSignaturePackagesSignersObtainSigningLinkParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignaturePackagesSignersObtainSigningLink'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSigner>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersRetrieve(
          eSignaturePackageId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesSignersRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
     * @summary Update a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignatureSignerENotary} eSignatureSignerENotary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesSignersUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignatureSignerENotary: ESignatureSignerENotary,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSigner>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesSignersUpdate(
          eSignaturePackageId,
          id,
          eSignatureSignerENotary,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesSignersUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update an eSignature package, which must be in `DRAFT` status.
     * @summary Update an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {ESignaturePackagesUpdateParams} eSignaturePackagesUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignaturePackagesUpdate(
      id: string,
      eSignaturePackagesUpdateParams: ESignaturePackagesUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignaturePackagesUpdate(
          id,
          eSignaturePackagesUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignaturePackagesUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download the PDF version of an uploaded document.
     * @summary Download pdf version of template
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 minutes and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesActionsDownload(
      eSignatureTemplateId: string,
      duration?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesActionsDownload(
          eSignatureTemplateId,
          duration,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesActionsDownload']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a package using an eSignature template
     * @summary Create an eSignature package using an eSignature template
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} title Name/title of the template
     * @param {Array<ESignatureTemplatesActionsForkSignersMapping>} signersMapping
     * @param {string} [description] Description of the template
     * @param {ESignatureKindEnum} [kind]
     * @param {Array<ESignatureTemplatesActionsForkCcRecipientsMapping>} [ccRecipientsMapping]
     * @param {Array<ESignatureTemplateDocumentFieldMapping>} [documentFieldMappings] These are the fields for documents, i.e. \\\&quot;documents::x\\\&quot;, it\\\&#39;ll be x
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesActionsFork(
      eSignatureTemplateId: string,
      title: string,
      signersMapping: Array<ESignatureTemplatesActionsForkSignersMapping>,
      description?: string,
      kind?: ESignatureKindEnum,
      ccRecipientsMapping?: Array<ESignatureTemplatesActionsForkCcRecipientsMapping>,
      documentFieldMappings?: Array<ESignatureTemplateDocumentFieldMapping>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignaturePackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesActionsFork(
          eSignatureTemplateId,
          title,
          signersMapping,
          description,
          kind,
          ccRecipientsMapping,
          documentFieldMappings,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesActionsFork']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a ccRecipient in the eSignature template, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Create a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplateRecipient} eSignatureTemplateRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesCcRecipientsCreate(
      eSignatureTemplateId: string,
      eSignatureTemplateRecipient: ESignatureTemplateRecipient,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateRecipient>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesCcRecipientsCreate(
          eSignatureTemplateId,
          eSignatureTemplateRecipient,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesCcRecipientsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Delete a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesCcRecipientsDelete(
      eSignatureTemplateId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesCcRecipientsDelete(
          eSignatureTemplateId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesCcRecipientsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List all cc-recipients
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesCcRecipientsList(
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesCcRecipientsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesCcRecipientsList(
          eSignatureTemplateId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesCcRecipientsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesCcRecipientsRetrieve(
      eSignatureTemplateId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateRecipient>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesCcRecipientsRetrieve(
          eSignatureTemplateId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesCcRecipientsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Update a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {ESignatureTemplatesCcRecipientsUpdateParams} eSignatureTemplatesCcRecipientsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesCcRecipientsUpdate(
      eSignatureTemplateId: string,
      id: string,
      eSignatureTemplatesCcRecipientsUpdateParams: ESignatureTemplatesCcRecipientsUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateRecipient>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesCcRecipientsUpdate(
          eSignatureTemplateId,
          id,
          eSignatureTemplatesCcRecipientsUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesCcRecipientsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Creates an eSignature template
     * @summary Create a template
     * @param {ESignatureTemplatesCreateParams} eSignatureTemplatesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesCreate(
      eSignatureTemplatesCreateParams: ESignatureTemplatesCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesCreate(
          eSignatureTemplatesCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Deletes the eSignature template
     * @summary Delete a template
     * @param {string} id Id of the eSignature template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDelete(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDelete(id, options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Reorder documents given a referenced array of document ids.
     * @summary Reorder documents
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplatesDocumentsReorderParams} eSignatureTemplatesDocumentsReorderParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsActionsReorder(
      eSignatureTemplateId: string,
      eSignatureTemplatesDocumentsReorderParams: ESignatureTemplatesDocumentsReorderParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsActionsReorder(
          eSignatureTemplateId,
          eSignatureTemplatesDocumentsReorderParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsActionsReorder'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a document in the eSignature template
     * @summary Create a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} name Name of the document
     * @param {(Buffer | ReadStream)} [data] Only required if the KIND is regular
     * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsCreate(
      eSignatureTemplateId: string,
      name: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateDocument>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsCreate(
          eSignatureTemplateId,
          name,
          data,
          pageRotations,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesDocumentsCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Delete a document in an eSignature template
     * @summary Delete a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsDelete(
      eSignatureTemplateId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsDelete(
          eSignatureTemplateId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesDocumentsDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Bulk create entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Bulk create entry pads
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureTemplatesDocumentsEntryPadsBulkCreateParams} eSignatureTemplatesDocumentsEntryPadsBulkCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate(
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureTemplatesDocumentsEntryPadsBulkCreateParams: ESignatureTemplatesDocumentsEntryPadsBulkCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesDocumentsEntryPadsBulkCreateResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate(
          eSignatureTemplateId,
          documentId,
          eSignatureTemplatesDocumentsEntryPadsBulkCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Bulk delete entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Bulk delete entry pads
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams} eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete(
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams: ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<GenericResponseDelete>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete(
          eSignatureTemplateId,
          documentId,
          eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureEntryPad} eSignatureEntryPad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsCreate(
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureEntryPad: ESignatureEntryPad,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureEntryPad>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsCreate(
          eSignatureTemplateId,
          documentId,
          eSignatureEntryPad,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsDelete(
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsDelete(
          eSignatureTemplateId,
          documentId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List entry pads in a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsList(
      eSignatureTemplateId: string,
      documentId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesDocumentsEntryPadsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsList(
          eSignatureTemplateId,
          documentId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsList'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsRetrieve(
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureEntryPad>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsRetrieve(
          eSignatureTemplateId,
          documentId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {ESignatureTemplatesDocumentsEntryPadsUpdateParams} eSignatureTemplatesDocumentsEntryPadsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsEntryPadsUpdate(
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      eSignatureTemplatesDocumentsEntryPadsUpdateParams: ESignatureTemplatesDocumentsEntryPadsUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureEntryPad>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsEntryPadsUpdate(
          eSignatureTemplateId,
          documentId,
          id,
          eSignatureTemplatesDocumentsEntryPadsUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesDocumentsEntryPadsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all the documents that are part of this eSignature template
     * @summary List all documents
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsList(
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesDocumentsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsList(
          eSignatureTemplateId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesDocumentsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsRetrieve(
      eSignatureTemplateId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateDocument>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsRetrieve(
          eSignatureTemplateId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesDocumentsRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update the document in an eSignature template
     * @summary Update a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {string} [name] Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations]
     * @param {Array<EasySignInput>} [easySignInputs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesDocumentsUpdate(
      eSignatureTemplateId: string,
      id: string,
      name?: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      easySignInputs?: Array<EasySignInput>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateDocument>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesDocumentsUpdate(
          eSignatureTemplateId,
          id,
          name,
          data,
          pageRotations,
          easySignInputs,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesDocumentsUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
     * @summary List all templates
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesList(
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesList(
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a template
     * @param {string} id Id of the eSignature template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesRetrieve(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesRetrieve(
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create an attachment request for for a signer.
     * @summary Create an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersAttachmentRequestsCreate(
      eSignatureTemplateId: string,
      signerId: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSignerAttachmentRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersAttachmentRequestsCreate(
          eSignatureTemplateId,
          signerId,
          eSignatureSignerAttachmentRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesSignersAttachmentRequestsCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Delete an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersAttachmentRequestsDelete(
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersAttachmentRequestsDelete(
          eSignatureTemplateId,
          signerId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesSignersAttachmentRequestsDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List attachment requests
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersAttachmentRequestsList(
      eSignatureTemplateId: string,
      signerId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesSignersAttachmentRequestsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersAttachmentRequestsList(
          eSignatureTemplateId,
          signerId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesSignersAttachmentRequestsList'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersAttachmentRequestsRetrieve(
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSignerAttachmentRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersAttachmentRequestsRetrieve(
          eSignatureTemplateId,
          signerId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesSignersAttachmentRequestsRetrieve'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Update an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersAttachmentRequestsUpdate(
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureSignerAttachmentRequest>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersAttachmentRequestsUpdate(
          eSignatureTemplateId,
          signerId,
          id,
          eSignatureSignerAttachmentRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesSignersAttachmentRequestsUpdate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a signer in the eSignature template.
     * @summary Create a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersCreate(
      eSignatureTemplateId: string,
      eSignatureTemplateSigner: ESignatureTemplateSigner,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateSigner>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersCreate(
          eSignatureTemplateId,
          eSignatureTemplateSigner,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesSignersCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Remove the signer for the template. Also removes their respective entry pads.
     * @summary Delete a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersDelete(
      eSignatureTemplateId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersDelete(
          eSignatureTemplateId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesSignersDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List all signers
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersList(
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesSignersListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersList(
          eSignatureTemplateId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesSignersList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersRetrieve(
      eSignatureTemplateId: string,
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateSigner>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersRetrieve(
          eSignatureTemplateId,
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesSignersRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Update a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesSignersUpdate(
      eSignatureTemplateId: string,
      id: string,
      eSignatureTemplateSigner: ESignatureTemplateSigner,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplateSigner>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesSignersUpdate(
          eSignatureTemplateId,
          id,
          eSignatureTemplateSigner,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesSignersUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Share a new eSignature Template to the team. Only the owner of the template can share it with the team.
     * @summary Share owned template with the team
     * @param {ESignatureTemplatesTeamTemplatesCreateParams} eSignatureTemplatesTeamTemplatesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesTeamTemplatesCreate(
      eSignatureTemplatesTeamTemplatesCreateParams: ESignatureTemplatesTeamTemplatesCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesTeamTemplatesCreate(
          eSignatureTemplatesTeamTemplatesCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesTeamTemplatesCreate'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Remove a template from the template. Must be the owner of the template, or the owner or admin of the team
     * @summary Remove template from the team
     * @param {string} id ID of template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesTeamTemplatesDelete(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesTeamTemplatesDelete(
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.eSignatureTemplatesTeamTemplatesDelete'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all the signature templates that belong to the team that the requester is part of.
     * @summary List all signature templates that belong to a team
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {string} [teamId] The user must belong to the team; not required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesTeamTemplatesList(
      limit?: number,
      skip?: number,
      teamId?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplatesTeamTemplatesListParams>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesTeamTemplatesList(
          limit,
          skip,
          teamId,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesTeamTemplatesList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Update an eSignature template.
     * @summary Update a template
     * @param {string} id Id of the eSignature template
     * @param {ESignatureTemplatesUpdateParams} eSignatureTemplatesUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async eSignatureTemplatesUpdate(
      id: string,
      eSignatureTemplatesUpdateParams: ESignatureTemplatesUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ESignatureTemplate>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.eSignatureTemplatesUpdate(
          id,
          eSignatureTemplatesUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.eSignatureTemplatesUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Can only cancel if the package is the `IN PROGRESS` status
     * @summary Cancel an identity verification package
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsCancel(
      id: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsCancel(
          id,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsCancel']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Create an identity verification package
     * @param {IdentityVerificationsCreateParams} [identityVerificationsCreateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsCreate(
      identityVerificationsCreateParams?: IdentityVerificationsCreateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsCreate(
          identityVerificationsCreateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsCreate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Delete an identity verification package specified by id
     * @param {string} id ID of identity verification package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsDelete(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GenericResponseDelete>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsDelete(
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsDelete']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Create a link to download the audit trail.
     * @summary Obtain download link for audit trail
     * @param {string} id ID of the verification package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsDownloadAuditTrail(
      id: string,
      duration?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<FileDownloadResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsDownloadAuditTrail(
          id,
          duration,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.identityVerificationsDownloadAuditTrail'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary List identity verification packages that belong to the user
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {Array<string>} [ids] Ids of elements to return as list
     * @param {boolean} [standalone] Returns IDV packages that are not linked to any other items (i.e. linked to signer 2FA or eNotary Package)
     * @param {IdentityVerificationStatusEnum} [status]
     * @param {Array<IdentityVerificationStatusEnum>} [statuses]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsList(
      limit?: number,
      skip?: number,
      ids?: Array<string>,
      standalone?: boolean,
      status?: IdentityVerificationStatusEnum,
      statuses?: Array<IdentityVerificationStatusEnum>,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationsListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsList(
          limit,
          skip,
          ids,
          standalone,
          status,
          statuses,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * Retrieve advanced options for an identity verification package
     * @summary Retrieve advanced options for an identity verification package
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsObtainAdvancedOptions(
      id: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackageAdvancedOptions>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsObtainAdvancedOptions(
          id,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.identityVerificationsObtainAdvancedOptions'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Get a link with a smart token to authenticate respondent
     * @param {string} id ID of the verification package
     * @param {IdentityVerificationsObtainRespondentLinkRequestParams} [identityVerificationsObtainRespondentLinkRequestParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsObtainRespondentLink(
      id: string,
      identityVerificationsObtainRespondentLinkRequestParams?: IdentityVerificationsObtainRespondentLinkRequestParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationsObtainRespondentLinkResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsObtainRespondentLink(
          id,
          identityVerificationsObtainRespondentLinkRequestParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap[
          'PactimaApi.identityVerificationsObtainRespondentLink'
        ]?.[localVarOperationServerIndex]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Retrieve an identity verification package
     * @param {string} id ID of identity verification package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsRetrieve(
      id: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsRetrieve(
          id,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsRetrieve']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Start an id verification
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsStart(
      id: string,
      body?: object,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsStart(
          id,
          body,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsStart']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Submit a document for verification
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} frontImage
     * @param {IdentityVerificationDocumentTypeEnum} documentType
     * @param {string} documentCountry
     * @param {(Buffer | ReadStream)} [backImage]
     * @param {string} [documentState]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsSubmitDocument(
      id: string,
      frontImage: Buffer | ReadStream,
      documentType: IdentityVerificationDocumentTypeEnum,
      documentCountry: string,
      backImage?: Buffer | ReadStream,
      documentState?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsSubmitDocument(
          id,
          frontImage,
          documentType,
          documentCountry,
          backImage,
          documentState,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsSubmitDocument']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Update an identity verification package. Package must be in `DRAFT`
     * @param {string} id ID of identity verification package
     * @param {IdentityVerificationsUpdateParams} identityVerificationsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsUpdate(
      id: string,
      identityVerificationsUpdateParams: IdentityVerificationsUpdateParams,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsUpdate(
          id,
          identityVerificationsUpdateParams,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsUpdate']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Add a video to verify liveness of the selfie
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} livenessVideo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsUploadLiveness(
      id: string,
      livenessVideo: Buffer | ReadStream,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsUploadLiveness(
          id,
          livenessVideo,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsUploadLiveness']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Add a selfie to verify documents against
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} selfie
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async identityVerificationsUploadSelfie(
      id: string,
      selfie: Buffer | ReadStream,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<IdentityVerificationPackage>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.identityVerificationsUploadSelfie(
          id,
          selfie,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.identityVerificationsUploadSelfie']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * List all members that are part of the specified team
     * @summary List all members
     * @param {string} teamId Id of the team
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async teamsMembersList(
      teamId: string,
      limit?: number,
      skip?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<TeamsMembersListResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.teamsMembersList(
          teamId,
          limit,
          skip,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap['PactimaApi.teamsMembersList']?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * PactimaApi - factory interface
 * @export
 */
export const PactimaApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = PactimaApiFp(configuration);
  return {
    /**
     * Cannot reset the authentication if the respective eSignature package is in a terminal status (i.e. COMPLETED, DECLINED, CANCELED) or Locked status (LOCKED_FOR_REVIEW)
     * @summary Reset the authentication of the eNotary package
     * @param {string} eNotaryPackageId Id of eNotary package
     * @param {ENotaryPackagesActionsResetAuthenticationParams} [eNotaryPackagesActionsResetAuthenticationParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesActionsResetAuthentication(
      eNotaryPackageId: string,
      eNotaryPackagesActionsResetAuthenticationParams?: ENotaryPackagesActionsResetAuthenticationParams,
      options?: any,
    ): AxiosPromise<ENotaryPackage> {
      return localVarFp
        .eNotaryPackagesActionsResetAuthentication(
          eNotaryPackageId,
          eNotaryPackagesActionsResetAuthenticationParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Can create afresh or have linked eSignature package can be LIVE (for RON) or IN_PERSON (for IPEN)
     * @summary Create an eNotary package
     * @param {ENotaryPackagesCreateParams} [eNotaryPackagesCreateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesCreate(
      eNotaryPackagesCreateParams?: ENotaryPackagesCreateParams,
      options?: any,
    ): AxiosPromise<ENotaryPackage> {
      return localVarFp
        .eNotaryPackagesCreate(eNotaryPackagesCreateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Delete an eNotary package
     * @param {string} id eNotary package id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesDelete(
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eNotaryPackagesDelete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download the eNotary journal. This operation is only valid if the respective eSignature package is in COMPLETED status
     * @summary Obtain eNotary journal download link
     * @param {string} eNotaryPackageId Id of eNotary package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesJournalActionsDownload(
      eNotaryPackageId: string,
      duration?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eNotaryPackagesJournalActionsDownload(
          eNotaryPackageId,
          duration,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List eNotary Packages
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesList(
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ENotaryPackagesListResponse> {
      return localVarFp
        .eNotaryPackagesList(limit, skip, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an eNotary package
     * @param {string} id eNotary package id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesRetrieve(
      id: string,
      options?: any,
    ): AxiosPromise<ENotaryPackage> {
      return localVarFp
        .eNotaryPackagesRetrieve(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Can only update if the respective eSignature package is in DRAFT or LIVE_EDITING mode
     * @summary Update an eNotary package
     * @param {string} id eNotary package id
     * @param {ENotaryPackagesUpdateParams} [eNotaryPackagesUpdateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesUpdate(
      id: string,
      eNotaryPackagesUpdateParams?: ENotaryPackagesUpdateParams,
      options?: any,
    ): AxiosPromise<ENotaryPackage> {
      return localVarFp
        .eNotaryPackagesUpdate(id, eNotaryPackagesUpdateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Create a validation request for a particular signer
     * @param {string} id eNotary package id
     * @param {ENotaryPackageValidationRequest} [eNotaryPackageValidationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesValidationRequestsCreate(
      id: string,
      eNotaryPackageValidationRequest?: ENotaryPackageValidationRequest,
      options?: any,
    ): AxiosPromise<ENotaryPackageValidationRequest> {
      return localVarFp
        .eNotaryPackagesValidationRequestsCreate(
          id,
          eNotaryPackageValidationRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The respective Live eSignature of eNotary package must be in DRAFT status
     * @summary Delete a validation request for an eNotary package
     * @param {string} id eNotary package id
     * @param {string} signerId id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesValidationRequestsDelete(
      id: string,
      signerId: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eNotaryPackagesValidationRequestsDelete(id, signerId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Can only update if the respective eSignature package is in DRAFT status
     * @summary Update the validation request of a signer
     * @param {string} id eNotary package id
     * @param {string} signerId id of the signer
     * @param {ENotaryPackagesValidationRequestsUpdateParams} [eNotaryPackagesValidationRequestsUpdateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eNotaryPackagesValidationRequestsUpdate(
      id: string,
      signerId: string,
      eNotaryPackagesValidationRequestsUpdateParams?: ENotaryPackagesValidationRequestsUpdateParams,
      options?: any,
    ): AxiosPromise<ENotaryPackageValidationRequest> {
      return localVarFp
        .eNotaryPackagesValidationRequestsUpdate(
          id,
          signerId,
          eNotaryPackagesValidationRequestsUpdateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Cancels an eSignature package. The package cannot be in `DRAFT` or `COMPLETED` status.
     * @summary Cancel the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsCancel(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsCancel(eSignaturePackageId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a template from the eSignature package
     * @summary Create a template
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} title Name/title of the template
     * @param {Array<ESignaturePackagesActionsCreateTemplateSignersMapping>} signersMapping
     * @param {string} [description] Description of the template
     * @param {Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>} [ccRecipientsMapping]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsCreateTemplate(
      eSignaturePackageId: string,
      title: string,
      signersMapping: Array<ESignaturePackagesActionsCreateTemplateSignersMapping>,
      description?: string,
      ccRecipientsMapping?: Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignaturePackagesActionsCreateTemplate(
          eSignaturePackageId,
          title,
          signersMapping,
          description,
          ccRecipientsMapping,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Disable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
     * @summary Disable recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsDisableRecording(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsDisableRecording(
          eSignaturePackageId,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download the eSignature package. This only provides access to the signed portion of the package, it does not include attachments, audit trials, etc.
     * @summary Obtain a download link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackageDownloadFormatEnum} [format]
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {string} [customPkiCertificateId] Id of the PKI certificate that belongs to the owner the eSignature package
     * @param {ESignatureIdHeaderLocationEnum} [idHeaderLocation]
     * @param {boolean} [isAsync] If true, will send an email to the participant once the download is ready
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsDownload(
      eSignaturePackageId: string,
      format?: ESignaturePackageDownloadFormatEnum,
      duration?: string,
      customPkiCertificateId?: string,
      idHeaderLocation?: ESignatureIdHeaderLocationEnum,
      isAsync?: boolean,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eSignaturePackagesActionsDownload(
          eSignaturePackageId,
          format,
          duration,
          customPkiCertificateId,
          idHeaderLocation,
          isAsync,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download to obtain the audit trails
     * @summary Obtain audit trails download link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {string} [locale]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsDownloadAuditTrails(
      eSignaturePackageId: string,
      duration?: string,
      locale?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eSignaturePackagesActionsDownloadAuditTrails(
          eSignaturePackageId,
          duration,
          locale,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Enable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
     * @summary Enable recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsEnableRecording(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsEnableRecording(
          eSignaturePackageId,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * For `LIVE` eSignature packages that have been completed, the signing session can be ended to terminate the video conference (and move participants to the exit workflow if applicable).
     * @summary End a signing session
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsEndSigningSession(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsEndSigningSession(
          eSignaturePackageId,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Start a DRAFT e-signature package immediately
     * @summary Start a DRAFT e-signature package immediately
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsExpressStart(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsExpressStart(
          eSignaturePackageId,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Forward a `COMPLETED` eSignature package by email
     * @summary Forward an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsForwardParams} [eSignaturePackagesActionsForwardParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsForward(
      eSignaturePackageId: string,
      eSignaturePackagesActionsForwardParams?: ESignaturePackagesActionsForwardParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsForward(
          eSignaturePackageId,
          eSignaturePackagesActionsForwardParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
     * @summary Modify advanced options of an in-flight eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsModifyAdvancedOptionsParams} [eSignaturePackagesActionsModifyAdvancedOptionsParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsModifyAdvancedOptions(
      eSignaturePackageId: string,
      eSignaturePackagesActionsModifyAdvancedOptionsParams?: ESignaturePackagesActionsModifyAdvancedOptionsParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsModifyAdvancedOptions(
          eSignaturePackageId,
          eSignaturePackagesActionsModifyAdvancedOptionsParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
     * @summary Modify metadata options of an in-flight eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsModifyMetadataParams} [eSignaturePackagesActionsModifyMetadataParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsModifyMetadata(
      eSignaturePackageId: string,
      eSignaturePackagesActionsModifyMetadataParams?: ESignaturePackagesActionsModifyMetadataParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsModifyMetadata(
          eSignaturePackageId,
          eSignaturePackagesActionsModifyMetadataParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieve advanced options for an eSignature package
     * @summary Retrieve advanced options for an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsObtainAdvancedOptions(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignatureAdvancedOptions> {
      return localVarFp
        .eSignaturePackagesActionsObtainAdvancedOptions(
          eSignaturePackageId,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link that can be used to request the package. The package must be in `DRAFT` status.
     * @summary Obtain link that can be used to prepare the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesObtainPreparationLinkParams} [eSignaturePackagesObtainPreparationLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsObtainPreparationLink(
      eSignaturePackageId: string,
      eSignaturePackagesObtainPreparationLinkParams?: ESignaturePackagesObtainPreparationLinkParams,
      options?: any,
    ): AxiosPromise<ESignaturePackagesObtainPreparationLinkResponse> {
      return localVarFp
        .eSignaturePackagesActionsObtainPreparationLink(
          eSignaturePackageId,
          eSignaturePackagesObtainPreparationLinkParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Redraft sets the eSignature back to the `DRAFT` status to allow modifications. Signers who have agreed and finalized, will have to re-perform their agreement, however their response are still saved.
     * @summary Redraft the eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsRedraft(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsRedraft(eSignaturePackageId, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Reschedule a LIVE eSignature package. It must be in `LIVE` or `SCHEDULED` status
     * @summary Reschedule a LIVE eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsRescheduleParams} eSignaturePackagesActionsRescheduleParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsReschedule(
      eSignaturePackageId: string,
      eSignaturePackagesActionsRescheduleParams: ESignaturePackagesActionsRescheduleParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsReschedule(
          eSignaturePackageId,
          eSignaturePackagesActionsRescheduleParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Reuse an completed eSignature package to create a draft eSignature package
     * @summary Reuse an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} [owner] ID of the owner of the newly created package. Defaults to owner of the current eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsReuse(
      eSignaturePackageId: string,
      owner?: string,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsReuse(eSignaturePackageId, owner, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieve via file-server to ensure that returns large (i.e. > 6MB)
     * @summary Safely retrieve an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {boolean} [enforcePreventAccessByMaskedRequesterConfig] If true, will enforce the prevent access by masked requester config in the eSignatures advanced options
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsSafeRetrieve(
      eSignaturePackageId: string,
      enforcePreventAccessByMaskedRequesterConfig?: boolean,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsSafeRetrieve(
          eSignaturePackageId,
          enforcePreventAccessByMaskedRequesterConfig,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Start the signing session for `LIVE` eSignature packages in the `SCHEDULED` status moving it to the `LIVE` status; moves the `IN_PERSON` eSignature package from `PREPARED` to `ACTIVE`
     * @summary Start the signing session
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsStartSigningSession(
      eSignaturePackageId: string,
      body?: object,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsStartSigningSession(
          eSignaturePackageId,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This endpoint is used to \"re-trigger\", i.e. change the particular kind of the package. Here are the conditions for trigger:\\ - For `LIVE` packages, the status must be `LIVE` or `SCHEDULED` - For `STANDARD` packages, the status must be `SENT`, and - For `IN_PERSON` packages, the status must be `ACTIVE` or `PREPARED`
     * @summary Change the kind of the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsSwitchKindParams} [eSignaturePackagesActionsSwitchKindParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsSwitchKind(
      eSignaturePackageId: string,
      eSignaturePackagesActionsSwitchKindParams?: ESignaturePackagesActionsSwitchKindParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsSwitchKind(
          eSignaturePackageId,
          eSignaturePackagesActionsSwitchKindParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Transfer an eSignature package to another user that is part of the same team
     * @summary Transfer an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsTransferParams} eSignaturePackagesActionsTransferParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsTransfer(
      eSignaturePackageId: string,
      eSignaturePackagesActionsTransferParams: ESignaturePackagesActionsTransferParams,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .eSignaturePackagesActionsTransfer(
          eSignaturePackageId,
          eSignaturePackagesActionsTransferParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Once an eSignature package have been fully drafted, it has to be triggered to start the signing. For `STANDARD` eSignature packages, move to `SENT`; `LIVE` eSignature packages move to `SCHEDULED`; and `IN_PERSON` move to `PREPARED`.
     * @summary Trigger a DRAFT eSignature package for signing
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesActionsTriggerParams} [eSignaturePackagesActionsTriggerParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsTrigger(
      eSignaturePackageId: string,
      eSignaturePackagesActionsTriggerParams?: ESignaturePackagesActionsTriggerParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsTrigger(
          eSignaturePackageId,
          eSignaturePackagesActionsTriggerParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Upload a zip file to an eSignature package
     * @summary Upload a zip file
     * @param {string} eSignaturePackageId
     * @param {(Buffer | ReadStream)} [data] The zip file to be uploaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesActionsZipUpload(
      eSignaturePackageId: string,
      data?: Buffer | ReadStream,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesActionsZipUpload(eSignaturePackageId, data, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download the original attachment
     * @summary Obtain a download link of a specific attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachments
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsActionsDownload(
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eSignaturePackagesAttachmentsActionsDownload(
          eSignaturePackageId,
          id,
          duration,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create an attachment in the eSignature package, which must be in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Create an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} filename
     * @param {(Buffer | ReadStream)} data
     * @param {boolean} [isConfidential]
     * @param {string} [requestId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsCreate(
      eSignaturePackageId: string,
      filename: string,
      data: Buffer | ReadStream,
      isConfidential?: boolean,
      requestId?: string,
      options?: any,
    ): AxiosPromise<ESignatureAttachment> {
      return localVarFp
        .eSignaturePackagesAttachmentsCreate(
          eSignaturePackageId,
          filename,
          data,
          isConfidential,
          requestId,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Delete an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesAttachmentsDelete(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List the attachments in the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 500.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesAttachmentsListResponse> {
      return localVarFp
        .eSignaturePackagesAttachmentsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureAttachment> {
      return localVarFp
        .eSignaturePackagesAttachmentsRetrieve(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Only updates the metadata of attachment. This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
     * @summary Update an attachment
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {ESignaturePackagesAttachmentsUpdate} eSignaturePackagesAttachmentsUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesAttachmentsUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesAttachmentsUpdate: ESignaturePackagesAttachmentsUpdate,
      options?: any,
    ): AxiosPromise<ESignatureAttachment> {
      return localVarFp
        .eSignaturePackagesAttachmentsUpdate(
          eSignaturePackageId,
          id,
          eSignaturePackagesAttachmentsUpdate,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Obtain a secure link to be used for a ccRecipient who has a special role as OBSERVER or OBSERVER_ONLY. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED).
     * @summary Obtain observer link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of ccRecipient
     * @param {ESignaturePackagesCCRecipientsObtainObserverLinkParams} [eSignaturePackagesCCRecipientsObtainObserverLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsActionsObtainObserverLink(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesCCRecipientsObtainObserverLinkParams?: ESignaturePackagesCCRecipientsObtainObserverLinkParams,
      options?: any,
    ): AxiosPromise<ESignaturePackagesCCRecipientsObtainObserverLinkResponse> {
      return localVarFp
        .eSignaturePackagesCcRecipientsActionsObtainObserverLink(
          eSignaturePackageId,
          id,
          eSignaturePackagesCCRecipientsObtainObserverLinkParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a ccRecipient in the eSignature package, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Create a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureCCRecipient} eSignatureCCRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsCreate(
      eSignaturePackageId: string,
      eSignatureCCRecipient: ESignatureCCRecipient,
      options?: any,
    ): AxiosPromise<ESignatureCCRecipient> {
      return localVarFp
        .eSignaturePackagesCcRecipientsCreate(
          eSignaturePackageId,
          eSignatureCCRecipient,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Delete a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesCcRecipientsDelete(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all cc-recipients
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesCcRecipientsListResponse> {
      return localVarFp
        .eSignaturePackagesCcRecipientsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureCCRecipient> {
      return localVarFp
        .eSignaturePackagesCcRecipientsRetrieve(
          eSignaturePackageId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Update a ccRecipient
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the ccRecipient
     * @param {ESignatureCCRecipient} eSignatureCCRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCcRecipientsUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignatureCCRecipient: ESignatureCCRecipient,
      options?: any,
    ): AxiosPromise<ESignatureCCRecipient> {
      return localVarFp
        .eSignaturePackagesCcRecipientsUpdate(
          eSignaturePackageId,
          id,
          eSignatureCCRecipient,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates an eSignature package and sets it initially in the `DRAFT` status.
     * @summary Create an eSignature package
     * @param {ESignaturePackagesCreateParams} eSignaturePackagesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesCreate(
      eSignaturePackagesCreateParams: ESignaturePackagesCreateParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesCreate(eSignaturePackagesCreateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes the eSignature package if it in the `DRAFT` or `CANCELLED` statuses. If the eSignature package is in the `COMPLETED` it will be deleted from the account, but archived according Pactima\'s retention policy.
     * @summary Delete an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDelete(
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesDelete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Apply eSignature template fields to specific document. The document must be in a `DRAFT` or `LIVE_EDITING` status
     * @summary Apply template fields to specific document
     * @param {string} eSignaturePackageId ID of ESignaturePackage
     * @param {string} id ID of document where fields need to be applied
     * @param {ESignaturePackagesDocumentsApplyTemplateParams} eSignaturePackagesDocumentsApplyTemplateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsActionsApplyTemplate(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesDocumentsApplyTemplateParams: ESignaturePackagesDocumentsApplyTemplateParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesDocumentsActionsApplyTemplate(
          eSignaturePackageId,
          id,
          eSignaturePackagesDocumentsApplyTemplateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download the PDF version of an uploaded document.
     * @summary Obtain a download link of a specific document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of document
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsActionsDownload(
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eSignaturePackagesDocumentsActionsDownload(
          eSignaturePackageId,
          id,
          duration,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Reorder documents given a referenced array of document ids. The package must be in a draft status, (i.e. DRAFT or LIVE_EDITING)
     * @summary Reorder documents
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignaturePackagesDocumentsReorderParams} eSignaturePackagesDocumentsReorderParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsActionsReorder(
      eSignaturePackageId: string,
      eSignaturePackagesDocumentsReorderParams: ESignaturePackagesDocumentsReorderParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignaturePackagesDocumentsActionsReorder(
          eSignaturePackageId,
          eSignaturePackagesDocumentsReorderParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a document in the eSignature package, the latter must be in either `DRAFT` or `LIVE_EDITING` status.
     * @summary Create a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} name Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsCreate(
      eSignaturePackageId: string,
      name: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      options?: any,
    ): AxiosPromise<ESignatureDocument> {
      return localVarFp
        .eSignaturePackagesDocumentsCreate(
          eSignaturePackageId,
          name,
          data,
          pageRotations,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesDocumentsDelete(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
     * @summary Create multiple entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignaturePackagesDocumentsEntryPadsBulkCreateParams} eSignaturePackagesDocumentsEntryPadsBulkCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsActionsBulkCreate(
      eSignaturePackageId: string,
      documentId: string,
      eSignaturePackagesDocumentsEntryPadsBulkCreateParams: ESignaturePackagesDocumentsEntryPadsBulkCreateParams,
      options?: any,
    ): AxiosPromise<ESignaturePackagesDocumentsEntryPadsBulkCreateResponse> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsActionsBulkCreate(
          eSignaturePackageId,
          documentId,
          eSignaturePackagesDocumentsEntryPadsBulkCreateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
     * @summary Delete multiple entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignaturePackagesDocumentsEntryPadsBulkDeleteParams} eSignaturePackagesDocumentsEntryPadsBulkDeleteParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsActionsBulkDelete(
      eSignaturePackageId: string,
      documentId: string,
      eSignaturePackagesDocumentsEntryPadsBulkDeleteParams: ESignaturePackagesDocumentsEntryPadsBulkDeleteParams,
      options?: any,
    ): AxiosPromise<Array<GenericResponseDelete>> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsActionsBulkDelete(
          eSignaturePackageId,
          documentId,
          eSignaturePackagesDocumentsEntryPadsBulkDeleteParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {ESignatureEntryPad} eSignatureEntryPad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsCreate(
      eSignaturePackageId: string,
      documentId: string,
      eSignatureEntryPad: ESignatureEntryPad,
      options?: any,
    ): AxiosPromise<ESignatureEntryPad> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsCreate(
          eSignaturePackageId,
          documentId,
          eSignatureEntryPad,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsDelete(
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsDelete(
          eSignaturePackageId,
          documentId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List entry pads in a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsList(
      eSignaturePackageId: string,
      documentId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesDocumentsEntryPadsListResponse> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsList(
          eSignaturePackageId,
          documentId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsRetrieve(
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureEntryPad> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsRetrieve(
          eSignaturePackageId,
          documentId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update an entry pad
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {ESignaturePackagesDocumentsEntryPadsUpdateParams} eSignaturePackagesDocumentsEntryPadsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsEntryPadsUpdate(
      eSignaturePackageId: string,
      documentId: string,
      id: string,
      eSignaturePackagesDocumentsEntryPadsUpdateParams: ESignaturePackagesDocumentsEntryPadsUpdateParams,
      options?: any,
    ): AxiosPromise<ESignatureEntryPad> {
      return localVarFp
        .eSignaturePackagesDocumentsEntryPadsUpdate(
          eSignaturePackageId,
          documentId,
          id,
          eSignaturePackagesDocumentsEntryPadsUpdateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List all the documents that are part of this eSignature package
     * @summary List all documents
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesDocumentsListResponse> {
      return localVarFp
        .eSignaturePackagesDocumentsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureDocument> {
      return localVarFp
        .eSignaturePackagesDocumentsRetrieve(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update a document
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the document
     * @param {string} [name] Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations]
     * @param {Array<EasySignInput>} [easySignInputs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesDocumentsUpdate(
      eSignaturePackageId: string,
      id: string,
      name?: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      easySignInputs?: Array<EasySignInput>,
      options?: any,
    ): AxiosPromise<ESignatureDocument> {
      return localVarFp
        .eSignaturePackagesDocumentsUpdate(
          eSignaturePackageId,
          id,
          name,
          data,
          pageRotations,
          easySignInputs,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a joint signers groups in the eSignature package, only valid signers can be added to a joint signers group.
     * @summary Create a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureJointSignersGroup} eSignatureJointSignersGroup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsCreate(
      eSignaturePackageId: string,
      eSignatureJointSignersGroup: ESignatureJointSignersGroup,
      options?: any,
    ): AxiosPromise<ESignatureJointSignersGroup> {
      return localVarFp
        .eSignaturePackagesJointSignersGroupsCreate(
          eSignaturePackageId,
          eSignatureJointSignersGroup,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete the specified joint signers group
     * @summary Delete a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsDelete(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesJointSignersGroupsDelete(
          eSignaturePackageId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all joint signers groups in an eSignature package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesJointSignersGroupsListResponse> {
      return localVarFp
        .eSignaturePackagesJointSignersGroupsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureJointSignersGroup> {
      return localVarFp
        .eSignaturePackagesJointSignersGroupsRetrieve(
          eSignaturePackageId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update the specified joint signers group.
     * @summary Update a joint signers group
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the joint signers group
     * @param {ESignaturePackagesJointSignersGroupsUpdateParams} eSignaturePackagesJointSignersGroupsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesJointSignersGroupsUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesJointSignersGroupsUpdateParams: ESignaturePackagesJointSignersGroupsUpdateParams,
      options?: any,
    ): AxiosPromise<ESignatureJointSignersGroup> {
      return localVarFp
        .eSignaturePackagesJointSignersGroupsUpdate(
          eSignaturePackageId,
          id,
          eSignaturePackagesJointSignersGroupsUpdateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
     * @summary List all eSignature packages
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {ESignatureKindEnum} [kind] Filter packages by kind if provided
     * @param {boolean} [isENotary] If provided, will apply a filter to include (i.e. true) or exclude (i.e false) eNotary packages (i.e. IPEN or RON)
     * @param {boolean} [excludeBulkSentPackage] Determines whether to include eSignature packages that are part of a bulk send package
     * @param {string} [searchTerm] Text to search for eSignature packages
     * @param {string} [updatedAtStartDate] Filter packages updated on or after the specified date
     * @param {string} [updatedAtEndDate] Filter packages updated on or before the specified date
     * @param {Array<ESignatureStatusEnum>} [statuses] Filter packages by status
     * @param {Array<string>} [packageFolderIds]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesList(
      limit?: number,
      skip?: number,
      kind?: ESignatureKindEnum,
      isENotary?: boolean,
      excludeBulkSentPackage?: boolean,
      searchTerm?: string,
      updatedAtStartDate?: string,
      updatedAtEndDate?: string,
      statuses?: Array<ESignatureStatusEnum>,
      packageFolderIds?: Array<string>,
      options?: any,
    ): AxiosPromise<ESignaturePackagesListResponse> {
      return localVarFp
        .eSignaturePackagesList(
          limit,
          skip,
          kind,
          isENotary,
          excludeBulkSentPackage,
          searchTerm,
          updatedAtStartDate,
          updatedAtEndDate,
          statuses,
          packageFolderIds,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download for a recording
     * @summary Obtain a download link of a specific recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the recording
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRecordingsDownload(
      eSignaturePackageId: string,
      id: string,
      duration?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eSignaturePackagesRecordingsDownload(
          eSignaturePackageId,
          id,
          duration,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List the recordings in the package
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 500.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRecordingsList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesRecordingsListResponse> {
      return localVarFp
        .eSignaturePackagesRecordingsList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a recording
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the attachment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRecordingsRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<LiveESignaturesVideoRecording> {
      return localVarFp
        .eSignaturePackagesRecordingsRetrieve(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesRetrieve(
      id: string,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesRetrieve(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Send a reminder to the signer by email.
     * @summary Send a reminder to a signer by email
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersActionsSendReminderByEmail(
      eSignaturePackageId: string,
      id: string,
      body?: object,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .eSignaturePackagesSignersActionsSendReminderByEmail(
          eSignaturePackageId,
          id,
          body,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Send a reminder to the signer by SMS.
     * @summary Send a reminder to a signer by SMS
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignaturePackagesSignersSendReminderBySMSParams} [eSignaturePackagesSignersSendReminderBySMSParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersActionsSendReminderBySMS(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesSignersSendReminderBySMSParams?: ESignaturePackagesSignersSendReminderBySMSParams,
      options?: any,
    ): AxiosPromise<object> {
      return localVarFp
        .eSignaturePackagesSignersActionsSendReminderBySMS(
          eSignaturePackageId,
          id,
          eSignaturePackagesSignersSendReminderBySMSParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create an attachment request for for a signer. This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the status is `SENT`, the signer should not have already SIGNED.
     * @summary Create an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsCreate(
      eSignaturePackageId: string,
      signerId: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: any,
    ): AxiosPromise<ESignatureSignerAttachmentRequest> {
      return localVarFp
        .eSignaturePackagesSignersAttachmentRequestsCreate(
          eSignaturePackageId,
          signerId,
          eSignatureSignerAttachmentRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
     * @summary Delete a signer attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsDelete(
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesSignersAttachmentRequestsDelete(
          eSignaturePackageId,
          signerId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List attachment requests
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsList(
      eSignaturePackageId: string,
      signerId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesSignersAttachmentRequestsListResponse> {
      return localVarFp
        .eSignaturePackagesSignersAttachmentRequestsList(
          eSignaturePackageId,
          signerId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsRetrieve(
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureSignerAttachmentRequest> {
      return localVarFp
        .eSignaturePackagesSignersAttachmentRequestsRetrieve(
          eSignaturePackageId,
          signerId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
     * @summary Update an attachment request
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersAttachmentRequestsUpdate(
      eSignaturePackageId: string,
      signerId: string,
      id: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: any,
    ): AxiosPromise<ESignatureSignerAttachmentRequest> {
      return localVarFp
        .eSignaturePackagesSignersAttachmentRequestsUpdate(
          eSignaturePackageId,
          signerId,
          id,
          eSignatureSignerAttachmentRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a signer in the eSignature package, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {ESignatureSignerENotary} eSignatureSignerENotary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersCreate(
      eSignaturePackageId: string,
      eSignatureSignerENotary: ESignatureSignerENotary,
      options?: any,
    ): AxiosPromise<ESignatureSigner> {
      return localVarFp
        .eSignaturePackagesSignersCreate(
          eSignaturePackageId,
          eSignatureSignerENotary,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
     * @summary Delete a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersDelete(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignaturePackagesSignersDelete(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all signers
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersList(
      eSignaturePackageId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignaturePackagesSignersListResponse> {
      return localVarFp
        .eSignaturePackagesSignersList(
          eSignaturePackageId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Obtain a secure link to be used for signing. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED). The signer should
     * @summary Obtain signing link
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignaturePackagesSignersObtainSigningLinkParams} [eSignaturePackagesSignersObtainSigningLinkParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersObtainSigningLink(
      eSignaturePackageId: string,
      id: string,
      eSignaturePackagesSignersObtainSigningLinkParams?: ESignaturePackagesSignersObtainSigningLinkParams,
      options?: any,
    ): AxiosPromise<ESignaturePackagesSignersObtainSigningLinkResponse> {
      return localVarFp
        .eSignaturePackagesSignersObtainSigningLink(
          eSignaturePackageId,
          id,
          eSignaturePackagesSignersObtainSigningLinkParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersRetrieve(
      eSignaturePackageId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureSigner> {
      return localVarFp
        .eSignaturePackagesSignersRetrieve(eSignaturePackageId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
     * @summary Update a signer
     * @param {string} eSignaturePackageId Id of the eSignature package
     * @param {string} id Id of the signer
     * @param {ESignatureSignerENotary} eSignatureSignerENotary
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesSignersUpdate(
      eSignaturePackageId: string,
      id: string,
      eSignatureSignerENotary: ESignatureSignerENotary,
      options?: any,
    ): AxiosPromise<ESignatureSigner> {
      return localVarFp
        .eSignaturePackagesSignersUpdate(
          eSignaturePackageId,
          id,
          eSignatureSignerENotary,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update an eSignature package, which must be in `DRAFT` status.
     * @summary Update an eSignature package
     * @param {string} id Id of the eSignature package
     * @param {ESignaturePackagesUpdateParams} eSignaturePackagesUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignaturePackagesUpdate(
      id: string,
      eSignaturePackagesUpdateParams: ESignaturePackagesUpdateParams,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignaturePackagesUpdate(id, eSignaturePackagesUpdateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download the PDF version of an uploaded document.
     * @summary Download pdf version of template
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 minutes and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesActionsDownload(
      eSignatureTemplateId: string,
      duration?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .eSignatureTemplatesActionsDownload(
          eSignatureTemplateId,
          duration,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a package using an eSignature template
     * @summary Create an eSignature package using an eSignature template
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} title Name/title of the template
     * @param {Array<ESignatureTemplatesActionsForkSignersMapping>} signersMapping
     * @param {string} [description] Description of the template
     * @param {ESignatureKindEnum} [kind]
     * @param {Array<ESignatureTemplatesActionsForkCcRecipientsMapping>} [ccRecipientsMapping]
     * @param {Array<ESignatureTemplateDocumentFieldMapping>} [documentFieldMappings] These are the fields for documents, i.e. \\\&quot;documents::x\\\&quot;, it\\\&#39;ll be x
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesActionsFork(
      eSignatureTemplateId: string,
      title: string,
      signersMapping: Array<ESignatureTemplatesActionsForkSignersMapping>,
      description?: string,
      kind?: ESignatureKindEnum,
      ccRecipientsMapping?: Array<ESignatureTemplatesActionsForkCcRecipientsMapping>,
      documentFieldMappings?: Array<ESignatureTemplateDocumentFieldMapping>,
      options?: any,
    ): AxiosPromise<ESignaturePackage> {
      return localVarFp
        .eSignatureTemplatesActionsFork(
          eSignatureTemplateId,
          title,
          signersMapping,
          description,
          kind,
          ccRecipientsMapping,
          documentFieldMappings,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a ccRecipient in the eSignature template, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Create a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplateRecipient} eSignatureTemplateRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsCreate(
      eSignatureTemplateId: string,
      eSignatureTemplateRecipient: ESignatureTemplateRecipient,
      options?: any,
    ): AxiosPromise<ESignatureTemplateRecipient> {
      return localVarFp
        .eSignatureTemplatesCcRecipientsCreate(
          eSignatureTemplateId,
          eSignatureTemplateRecipient,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Delete a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsDelete(
      eSignatureTemplateId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesCcRecipientsDelete(
          eSignatureTemplateId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all cc-recipients
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsList(
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesCcRecipientsListResponse> {
      return localVarFp
        .eSignatureTemplatesCcRecipientsList(
          eSignatureTemplateId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsRetrieve(
      eSignatureTemplateId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureTemplateRecipient> {
      return localVarFp
        .eSignatureTemplatesCcRecipientsRetrieve(
          eSignatureTemplateId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
     * @summary Update a ccRecipient
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the ccRecipient
     * @param {ESignatureTemplatesCcRecipientsUpdateParams} eSignatureTemplatesCcRecipientsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCcRecipientsUpdate(
      eSignatureTemplateId: string,
      id: string,
      eSignatureTemplatesCcRecipientsUpdateParams: ESignatureTemplatesCcRecipientsUpdateParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplateRecipient> {
      return localVarFp
        .eSignatureTemplatesCcRecipientsUpdate(
          eSignatureTemplateId,
          id,
          eSignatureTemplatesCcRecipientsUpdateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Creates an eSignature template
     * @summary Create a template
     * @param {ESignatureTemplatesCreateParams} eSignatureTemplatesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesCreate(
      eSignatureTemplatesCreateParams: ESignatureTemplatesCreateParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignatureTemplatesCreate(eSignatureTemplatesCreateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Deletes the eSignature template
     * @summary Delete a template
     * @param {string} id Id of the eSignature template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDelete(
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesDelete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Reorder documents given a referenced array of document ids.
     * @summary Reorder documents
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplatesDocumentsReorderParams} eSignatureTemplatesDocumentsReorderParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsActionsReorder(
      eSignatureTemplateId: string,
      eSignatureTemplatesDocumentsReorderParams: ESignatureTemplatesDocumentsReorderParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignatureTemplatesDocumentsActionsReorder(
          eSignatureTemplateId,
          eSignatureTemplatesDocumentsReorderParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a document in the eSignature template
     * @summary Create a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} name Name of the document
     * @param {(Buffer | ReadStream)} [data] Only required if the KIND is regular
     * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsCreate(
      eSignatureTemplateId: string,
      name: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      options?: any,
    ): AxiosPromise<ESignatureTemplateDocument> {
      return localVarFp
        .eSignatureTemplatesDocumentsCreate(
          eSignatureTemplateId,
          name,
          data,
          pageRotations,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete a document in an eSignature template
     * @summary Delete a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsDelete(
      eSignatureTemplateId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesDocumentsDelete(eSignatureTemplateId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Bulk create entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Bulk create entry pads
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureTemplatesDocumentsEntryPadsBulkCreateParams} eSignatureTemplatesDocumentsEntryPadsBulkCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate(
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureTemplatesDocumentsEntryPadsBulkCreateParams: ESignatureTemplatesDocumentsEntryPadsBulkCreateParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesDocumentsEntryPadsBulkCreateResponse> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate(
          eSignatureTemplateId,
          documentId,
          eSignatureTemplatesDocumentsEntryPadsBulkCreateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Bulk delete entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Bulk delete entry pads
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams} eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete(
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams: ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
      options?: any,
    ): AxiosPromise<Array<GenericResponseDelete>> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete(
          eSignatureTemplateId,
          documentId,
          eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
     * @summary Create an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {ESignatureEntryPad} eSignatureEntryPad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsCreate(
      eSignatureTemplateId: string,
      documentId: string,
      eSignatureEntryPad: ESignatureEntryPad,
      options?: any,
    ): AxiosPromise<ESignatureEntryPad> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsCreate(
          eSignatureTemplateId,
          documentId,
          eSignatureEntryPad,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Delete an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsDelete(
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsDelete(
          eSignatureTemplateId,
          documentId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List entry pads in a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsList(
      eSignatureTemplateId: string,
      documentId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesDocumentsEntryPadsListResponse> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsList(
          eSignatureTemplateId,
          documentId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsRetrieve(
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureEntryPad> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsRetrieve(
          eSignatureTemplateId,
          documentId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
     * @summary Update an entry pad
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} documentId Id of the document
     * @param {string} id Id of the entry pad
     * @param {ESignatureTemplatesDocumentsEntryPadsUpdateParams} eSignatureTemplatesDocumentsEntryPadsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsEntryPadsUpdate(
      eSignatureTemplateId: string,
      documentId: string,
      id: string,
      eSignatureTemplatesDocumentsEntryPadsUpdateParams: ESignatureTemplatesDocumentsEntryPadsUpdateParams,
      options?: any,
    ): AxiosPromise<ESignatureEntryPad> {
      return localVarFp
        .eSignatureTemplatesDocumentsEntryPadsUpdate(
          eSignatureTemplateId,
          documentId,
          id,
          eSignatureTemplatesDocumentsEntryPadsUpdateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * List all the documents that are part of this eSignature template
     * @summary List all documents
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsList(
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesDocumentsListResponse> {
      return localVarFp
        .eSignatureTemplatesDocumentsList(
          eSignatureTemplateId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsRetrieve(
      eSignatureTemplateId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureTemplateDocument> {
      return localVarFp
        .eSignatureTemplatesDocumentsRetrieve(eSignatureTemplateId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update the document in an eSignature template
     * @summary Update a document
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the document
     * @param {string} [name] Name of the document
     * @param {(Buffer | ReadStream)} [data]
     * @param {Array<ESignaturePageRotation>} [pageRotations]
     * @param {Array<EasySignInput>} [easySignInputs]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesDocumentsUpdate(
      eSignatureTemplateId: string,
      id: string,
      name?: string,
      data?: Buffer | ReadStream,
      pageRotations?: Array<ESignaturePageRotation>,
      easySignInputs?: Array<EasySignInput>,
      options?: any,
    ): AxiosPromise<ESignatureTemplateDocument> {
      return localVarFp
        .eSignatureTemplatesDocumentsUpdate(
          eSignatureTemplateId,
          id,
          name,
          data,
          pageRotations,
          easySignInputs,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
     * @summary List all templates
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesList(
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesListResponse> {
      return localVarFp
        .eSignatureTemplatesList(limit, skip, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a template
     * @param {string} id Id of the eSignature template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesRetrieve(
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignatureTemplatesRetrieve(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create an attachment request for for a signer.
     * @summary Create an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsCreate(
      eSignatureTemplateId: string,
      signerId: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: any,
    ): AxiosPromise<ESignatureSignerAttachmentRequest> {
      return localVarFp
        .eSignatureTemplatesSignersAttachmentRequestsCreate(
          eSignatureTemplateId,
          signerId,
          eSignatureSignerAttachmentRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Delete an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsDelete(
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesSignersAttachmentRequestsDelete(
          eSignatureTemplateId,
          signerId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List attachment requests
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsList(
      eSignatureTemplateId: string,
      signerId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesSignersAttachmentRequestsListResponse> {
      return localVarFp
        .eSignatureTemplatesSignersAttachmentRequestsList(
          eSignatureTemplateId,
          signerId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsRetrieve(
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureSignerAttachmentRequest> {
      return localVarFp
        .eSignatureTemplatesSignersAttachmentRequestsRetrieve(
          eSignatureTemplateId,
          signerId,
          id,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update an attachment request
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} signerId Id of the signer
     * @param {string} id Id of the attachment request
     * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersAttachmentRequestsUpdate(
      eSignatureTemplateId: string,
      signerId: string,
      id: string,
      eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
      options?: any,
    ): AxiosPromise<ESignatureSignerAttachmentRequest> {
      return localVarFp
        .eSignatureTemplatesSignersAttachmentRequestsUpdate(
          eSignatureTemplateId,
          signerId,
          id,
          eSignatureSignerAttachmentRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a signer in the eSignature template.
     * @summary Create a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersCreate(
      eSignatureTemplateId: string,
      eSignatureTemplateSigner: ESignatureTemplateSigner,
      options?: any,
    ): AxiosPromise<ESignatureTemplateSigner> {
      return localVarFp
        .eSignatureTemplatesSignersCreate(
          eSignatureTemplateId,
          eSignatureTemplateSigner,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Remove the signer for the template. Also removes their respective entry pads.
     * @summary Delete a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersDelete(
      eSignatureTemplateId: string,
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesSignersDelete(eSignatureTemplateId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all signers
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersList(
      eSignatureTemplateId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesSignersListResponse> {
      return localVarFp
        .eSignatureTemplatesSignersList(
          eSignatureTemplateId,
          limit,
          skip,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersRetrieve(
      eSignatureTemplateId: string,
      id: string,
      options?: any,
    ): AxiosPromise<ESignatureTemplateSigner> {
      return localVarFp
        .eSignatureTemplatesSignersRetrieve(eSignatureTemplateId, id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update a signer
     * @param {string} eSignatureTemplateId Id of the eSignature template
     * @param {string} id Id of the signer
     * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesSignersUpdate(
      eSignatureTemplateId: string,
      id: string,
      eSignatureTemplateSigner: ESignatureTemplateSigner,
      options?: any,
    ): AxiosPromise<ESignatureTemplateSigner> {
      return localVarFp
        .eSignatureTemplatesSignersUpdate(
          eSignatureTemplateId,
          id,
          eSignatureTemplateSigner,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Share a new eSignature Template to the team. Only the owner of the template can share it with the team.
     * @summary Share owned template with the team
     * @param {ESignatureTemplatesTeamTemplatesCreateParams} eSignatureTemplatesTeamTemplatesCreateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesTeamTemplatesCreate(
      eSignatureTemplatesTeamTemplatesCreateParams: ESignatureTemplatesTeamTemplatesCreateParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignatureTemplatesTeamTemplatesCreate(
          eSignatureTemplatesTeamTemplatesCreateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Remove a template from the template. Must be the owner of the template, or the owner or admin of the team
     * @summary Remove template from the team
     * @param {string} id ID of template
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesTeamTemplatesDelete(
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .eSignatureTemplatesTeamTemplatesDelete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List all the signature templates that belong to the team that the requester is part of.
     * @summary List all signature templates that belong to a team
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {string} [teamId] The user must belong to the team; not required
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesTeamTemplatesList(
      limit?: number,
      skip?: number,
      teamId?: string,
      options?: any,
    ): AxiosPromise<ESignatureTemplatesTeamTemplatesListParams> {
      return localVarFp
        .eSignatureTemplatesTeamTemplatesList(limit, skip, teamId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Update an eSignature template.
     * @summary Update a template
     * @param {string} id Id of the eSignature template
     * @param {ESignatureTemplatesUpdateParams} eSignatureTemplatesUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eSignatureTemplatesUpdate(
      id: string,
      eSignatureTemplatesUpdateParams: ESignatureTemplatesUpdateParams,
      options?: any,
    ): AxiosPromise<ESignatureTemplate> {
      return localVarFp
        .eSignatureTemplatesUpdate(id, eSignatureTemplatesUpdateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Can only cancel if the package is the `IN PROGRESS` status
     * @summary Cancel an identity verification package
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsCancel(
      id: string,
      body?: object,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsCancel(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Create an identity verification package
     * @param {IdentityVerificationsCreateParams} [identityVerificationsCreateParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsCreate(
      identityVerificationsCreateParams?: IdentityVerificationsCreateParams,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsCreate(identityVerificationsCreateParams, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Delete an identity verification package specified by id
     * @param {string} id ID of identity verification package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsDelete(
      id: string,
      options?: any,
    ): AxiosPromise<GenericResponseDelete> {
      return localVarFp
        .identityVerificationsDelete(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Create a link to download the audit trail.
     * @summary Obtain download link for audit trail
     * @param {string} id ID of the verification package
     * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsDownloadAuditTrail(
      id: string,
      duration?: string,
      options?: any,
    ): AxiosPromise<FileDownloadResponse> {
      return localVarFp
        .identityVerificationsDownloadAuditTrail(id, duration, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List identity verification packages that belong to the user
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The number at which at the starts;. Must be less than maximum of elements
     * @param {Array<string>} [ids] Ids of elements to return as list
     * @param {boolean} [standalone] Returns IDV packages that are not linked to any other items (i.e. linked to signer 2FA or eNotary Package)
     * @param {IdentityVerificationStatusEnum} [status]
     * @param {Array<IdentityVerificationStatusEnum>} [statuses]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsList(
      limit?: number,
      skip?: number,
      ids?: Array<string>,
      standalone?: boolean,
      status?: IdentityVerificationStatusEnum,
      statuses?: Array<IdentityVerificationStatusEnum>,
      options?: any,
    ): AxiosPromise<IdentityVerificationsListResponse> {
      return localVarFp
        .identityVerificationsList(
          limit,
          skip,
          ids,
          standalone,
          status,
          statuses,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieve advanced options for an identity verification package
     * @summary Retrieve advanced options for an identity verification package
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsObtainAdvancedOptions(
      id: string,
      body?: object,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackageAdvancedOptions> {
      return localVarFp
        .identityVerificationsObtainAdvancedOptions(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a link with a smart token to authenticate respondent
     * @param {string} id ID of the verification package
     * @param {IdentityVerificationsObtainRespondentLinkRequestParams} [identityVerificationsObtainRespondentLinkRequestParams]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsObtainRespondentLink(
      id: string,
      identityVerificationsObtainRespondentLinkRequestParams?: IdentityVerificationsObtainRespondentLinkRequestParams,
      options?: any,
    ): AxiosPromise<IdentityVerificationsObtainRespondentLinkResponse> {
      return localVarFp
        .identityVerificationsObtainRespondentLink(
          id,
          identityVerificationsObtainRespondentLinkRequestParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an identity verification package
     * @param {string} id ID of identity verification package
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsRetrieve(
      id: string,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsRetrieve(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Start an id verification
     * @param {string} id ID of the verification package
     * @param {object} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsStart(
      id: string,
      body?: object,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsStart(id, body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Submit a document for verification
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} frontImage
     * @param {IdentityVerificationDocumentTypeEnum} documentType
     * @param {string} documentCountry
     * @param {(Buffer | ReadStream)} [backImage]
     * @param {string} [documentState]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsSubmitDocument(
      id: string,
      frontImage: Buffer | ReadStream,
      documentType: IdentityVerificationDocumentTypeEnum,
      documentCountry: string,
      backImage?: Buffer | ReadStream,
      documentState?: string,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsSubmitDocument(
          id,
          frontImage,
          documentType,
          documentCountry,
          backImage,
          documentState,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update an identity verification package. Package must be in `DRAFT`
     * @param {string} id ID of identity verification package
     * @param {IdentityVerificationsUpdateParams} identityVerificationsUpdateParams
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsUpdate(
      id: string,
      identityVerificationsUpdateParams: IdentityVerificationsUpdateParams,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsUpdate(
          id,
          identityVerificationsUpdateParams,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Add a video to verify liveness of the selfie
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} livenessVideo
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsUploadLiveness(
      id: string,
      livenessVideo: Buffer | ReadStream,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsUploadLiveness(id, livenessVideo, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Add a selfie to verify documents against
     * @param {string} id ID of the verification package
     * @param {(Buffer | ReadStream)} selfie
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    identityVerificationsUploadSelfie(
      id: string,
      selfie: Buffer | ReadStream,
      options?: any,
    ): AxiosPromise<IdentityVerificationPackage> {
      return localVarFp
        .identityVerificationsUploadSelfie(id, selfie, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List all members that are part of the specified team
     * @summary List all members
     * @param {string} teamId Id of the team
     * @param {number} [limit] Limit on number of objects returned. Default to 100. Maximum 100.
     * @param {number} [skip] The cursor pagination for the number at which at the returned array starts. Must be less than maximum of elements.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsMembersList(
      teamId: string,
      limit?: number,
      skip?: number,
      options?: any,
    ): AxiosPromise<TeamsMembersListResponse> {
      return localVarFp
        .teamsMembersList(teamId, limit, skip, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * PactimaApi - object-oriented interface
 * @export
 * @class PactimaApi
 * @extends {BaseAPI}
 */
export class PactimaApi extends BaseAPI {
  /**
   * Cannot reset the authentication if the respective eSignature package is in a terminal status (i.e. COMPLETED, DECLINED, CANCELED) or Locked status (LOCKED_FOR_REVIEW)
   * @summary Reset the authentication of the eNotary package
   * @param {string} eNotaryPackageId Id of eNotary package
   * @param {ENotaryPackagesActionsResetAuthenticationParams} [eNotaryPackagesActionsResetAuthenticationParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesActionsResetAuthentication = (
    eNotaryPackageId: string,
    eNotaryPackagesActionsResetAuthenticationParams?: ENotaryPackagesActionsResetAuthenticationParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesActionsResetAuthentication(
        eNotaryPackageId,
        eNotaryPackagesActionsResetAuthenticationParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Can create afresh or have linked eSignature package can be LIVE (for RON) or IN_PERSON (for IPEN)
   * @summary Create an eNotary package
   * @param {ENotaryPackagesCreateParams} [eNotaryPackagesCreateParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesCreate = (
    eNotaryPackagesCreateParams?: ENotaryPackagesCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesCreate(eNotaryPackagesCreateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Delete an eNotary package
   * @param {string} id eNotary package id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesDelete = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download the eNotary journal. This operation is only valid if the respective eSignature package is in COMPLETED status
   * @summary Obtain eNotary journal download link
   * @param {string} eNotaryPackageId Id of eNotary package
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesJournalActionsDownload = (
    eNotaryPackageId: string,
    formData: { duration?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesJournalActionsDownload(
        eNotaryPackageId,
        duration,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List eNotary Packages
                            * @param { 
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eNotaryPackagesList = (
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesList(limit, skip, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an eNotary package
   * @param {string} id eNotary package id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesRetrieve = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesRetrieve(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Can only update if the respective eSignature package is in DRAFT or LIVE_EDITING mode
   * @summary Update an eNotary package
   * @param {string} id eNotary package id
   * @param {ENotaryPackagesUpdateParams} [eNotaryPackagesUpdateParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesUpdate = (
    id: string,
    eNotaryPackagesUpdateParams?: ENotaryPackagesUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesUpdate(id, eNotaryPackagesUpdateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Create a validation request for a particular signer
   * @param {string} id eNotary package id
   * @param {ENotaryPackageValidationRequest} [eNotaryPackageValidationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesValidationRequestsCreate = (
    id: string,
    eNotaryPackageValidationRequest?: ENotaryPackageValidationRequest,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesValidationRequestsCreate(
        id,
        eNotaryPackageValidationRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * The respective Live eSignature of eNotary package must be in DRAFT status
   * @summary Delete a validation request for an eNotary package
   * @param {string} id eNotary package id
   * @param {string} signerId id of the signer
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesValidationRequestsDelete = (
    id: string,
    signerId: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesValidationRequestsDelete(id, signerId, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Can only update if the respective eSignature package is in DRAFT status
   * @summary Update the validation request of a signer
   * @param {string} id eNotary package id
   * @param {string} signerId id of the signer
   * @param {ENotaryPackagesValidationRequestsUpdateParams} [eNotaryPackagesValidationRequestsUpdateParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eNotaryPackagesValidationRequestsUpdate = (
    id: string,
    signerId: string,
    eNotaryPackagesValidationRequestsUpdateParams?: ENotaryPackagesValidationRequestsUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eNotaryPackagesValidationRequestsUpdate(
        id,
        signerId,
        eNotaryPackagesValidationRequestsUpdateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Cancels an eSignature package. The package cannot be in `DRAFT` or `COMPLETED` status.
   * @summary Cancel the eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsCancel = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsCancel(eSignaturePackageId, body, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a template from the eSignature package
   * @summary Create a template
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} title Name/title of the template
   * @param {Array<ESignaturePackagesActionsCreateTemplateSignersMapping>} signersMapping
   * @param {string} [description] Description of the template
   * @param {Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>} [ccRecipientsMapping]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsCreateTemplate = (
    eSignaturePackageId: string,
    formData: {
      title: string;
      description?: string;
      signersMapping: Array<ESignaturePackagesActionsCreateTemplateSignersMapping>;
      ccRecipientsMapping?: Array<ESignaturePackagesActionsCreateTemplateCCRecipientsMapping>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { title, description, signersMapping, ccRecipientsMapping } =
      formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsCreateTemplate(
        eSignaturePackageId,
        title,
        signersMapping,
        description,
        ccRecipientsMapping,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Disable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
   * @summary Disable recording
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsDisableRecording = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsDisableRecording(
        eSignaturePackageId,
        body,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download the eSignature package. This only provides access to the signed portion of the package, it does not include attachments, audit trials, etc.
   * @summary Obtain a download link
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackageDownloadFormatEnum} [format]
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {string} [customPkiCertificateId] Id of the PKI certificate that belongs to the owner the eSignature package
   * @param {ESignatureIdHeaderLocationEnum} [idHeaderLocation]
   * @param {boolean} [isAsync] If true, will send an email to the participant once the download is ready
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsDownload = (
    eSignaturePackageId: string,
    formData: {
      format?: ESignaturePackageDownloadFormatEnum;
      duration?: string;
      customPkiCertificateId?: string;
      idHeaderLocation?: ESignatureIdHeaderLocationEnum;
      isAsync?: boolean;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const {
      format,
      duration,
      customPkiCertificateId,
      idHeaderLocation,
      isAsync,
    } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsDownload(
        eSignaturePackageId,
        format,
        duration,
        customPkiCertificateId,
        idHeaderLocation,
        isAsync,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download to obtain the audit trails
   * @summary Obtain audit trails download link
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {string} [locale]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsDownloadAuditTrails = (
    eSignaturePackageId: string,
    formData: { duration?: string; locale?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration, locale } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsDownloadAuditTrails(
        eSignaturePackageId,
        duration,
        locale,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Enable video recording of an eSignature package. The package must be in SCHEDULED,LIVE, or LOCKED FOR REVIEW status.
   * @summary Enable recording
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsEnableRecording = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsEnableRecording(
        eSignaturePackageId,
        body,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * For `LIVE` eSignature packages that have been completed, the signing session can be ended to terminate the video conference (and move participants to the exit workflow if applicable).
   * @summary End a signing session
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsEndSigningSession = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsEndSigningSession(
        eSignaturePackageId,
        body,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Start a DRAFT e-signature package immediately
   * @summary Start a DRAFT e-signature package immediately
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsExpressStart = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsExpressStart(eSignaturePackageId, body, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Forward a `COMPLETED` eSignature package by email
   * @summary Forward an eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsForwardParams} [eSignaturePackagesActionsForwardParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsForward = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsForwardParams?: ESignaturePackagesActionsForwardParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsForward(
        eSignaturePackageId,
        eSignaturePackagesActionsForwardParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
   * @summary Modify advanced options of an in-flight eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsModifyAdvancedOptionsParams} [eSignaturePackagesActionsModifyAdvancedOptionsParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsModifyAdvancedOptions = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsModifyAdvancedOptionsParams?: ESignaturePackagesActionsModifyAdvancedOptionsParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsModifyAdvancedOptions(
        eSignaturePackageId,
        eSignaturePackagesActionsModifyAdvancedOptionsParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * The eSignature package must be in flight, that iS in one of the following status:/ - `ACTIVE` - `LIVE` - `LIVE_EDITING` - `PREPARED` - `SENT` - `SCHEDULED`
   * @summary Modify metadata options of an in-flight eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsModifyMetadataParams} [eSignaturePackagesActionsModifyMetadataParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsModifyMetadata = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsModifyMetadataParams?: ESignaturePackagesActionsModifyMetadataParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsModifyMetadata(
        eSignaturePackageId,
        eSignaturePackagesActionsModifyMetadataParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Retrieve advanced options for an eSignature package
   * @summary Retrieve advanced options for an eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsObtainAdvancedOptions = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsObtainAdvancedOptions(
        eSignaturePackageId,
        body,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link that can be used to request the package. The package must be in `DRAFT` status.
   * @summary Obtain link that can be used to prepare the eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesObtainPreparationLinkParams} [eSignaturePackagesObtainPreparationLinkParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsObtainPreparationLink = (
    eSignaturePackageId: string,
    eSignaturePackagesObtainPreparationLinkParams?: ESignaturePackagesObtainPreparationLinkParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsObtainPreparationLink(
        eSignaturePackageId,
        eSignaturePackagesObtainPreparationLinkParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Redraft sets the eSignature back to the `DRAFT` status to allow modifications. Signers who have agreed and finalized, will have to re-perform their agreement, however their response are still saved.
   * @summary Redraft the eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsRedraft = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsRedraft(eSignaturePackageId, body, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Reschedule a LIVE eSignature package. It must be in `LIVE` or `SCHEDULED` status
   * @summary Reschedule a LIVE eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsRescheduleParams} eSignaturePackagesActionsRescheduleParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsReschedule = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsRescheduleParams: ESignaturePackagesActionsRescheduleParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsReschedule(
        eSignaturePackageId,
        eSignaturePackagesActionsRescheduleParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Reuse an completed eSignature package to create a draft eSignature package
   * @summary Reuse an eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} [owner] ID of the owner of the newly created package. Defaults to owner of the current eSignature package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsReuse = (
    eSignaturePackageId: string,
    formData: { owner?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { owner } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsReuse(eSignaturePackageId, owner, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Retrieve via file-server to ensure that returns large (i.e. > 6MB)
   * @summary Safely retrieve an eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {boolean} [enforcePreventAccessByMaskedRequesterConfig] If true, will enforce the prevent access by masked requester config in the eSignatures advanced options
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsSafeRetrieve = (
    eSignaturePackageId: string,
    formData: { enforcePreventAccessByMaskedRequesterConfig?: boolean },
    options?: RawAxiosRequestConfig,
  ) => {
    const { enforcePreventAccessByMaskedRequesterConfig } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsSafeRetrieve(
        eSignaturePackageId,
        enforcePreventAccessByMaskedRequesterConfig,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Start the signing session for `LIVE` eSignature packages in the `SCHEDULED` status moving it to the `LIVE` status; moves the `IN_PERSON` eSignature package from `PREPARED` to `ACTIVE`
   * @summary Start the signing session
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsStartSigningSession = (
    eSignaturePackageId: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsStartSigningSession(
        eSignaturePackageId,
        body,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This endpoint is used to \"re-trigger\", i.e. change the particular kind of the package. Here are the conditions for trigger:\\ - For `LIVE` packages, the status must be `LIVE` or `SCHEDULED` - For `STANDARD` packages, the status must be `SENT`, and - For `IN_PERSON` packages, the status must be `ACTIVE` or `PREPARED`
   * @summary Change the kind of the package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsSwitchKindParams} [eSignaturePackagesActionsSwitchKindParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsSwitchKind = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsSwitchKindParams?: ESignaturePackagesActionsSwitchKindParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsSwitchKind(
        eSignaturePackageId,
        eSignaturePackagesActionsSwitchKindParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Transfer an eSignature package to another user that is part of the same team
   * @summary Transfer an eSignature package
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsTransferParams} eSignaturePackagesActionsTransferParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsTransfer = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsTransferParams: ESignaturePackagesActionsTransferParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsTransfer(
        eSignaturePackageId,
        eSignaturePackagesActionsTransferParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Once an eSignature package have been fully drafted, it has to be triggered to start the signing. For `STANDARD` eSignature packages, move to `SENT`; `LIVE` eSignature packages move to `SCHEDULED`; and `IN_PERSON` move to `PREPARED`.
   * @summary Trigger a DRAFT eSignature package for signing
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesActionsTriggerParams} [eSignaturePackagesActionsTriggerParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsTrigger = (
    eSignaturePackageId: string,
    eSignaturePackagesActionsTriggerParams?: ESignaturePackagesActionsTriggerParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsTrigger(
        eSignaturePackageId,
        eSignaturePackagesActionsTriggerParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Upload a zip file to an eSignature package
   * @summary Upload a zip file
   * @param {string} eSignaturePackageId
   * @param {(Buffer | ReadStream)} [data] The zip file to be uploaded
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesActionsZipUpload = (
    eSignaturePackageId: string,
    formData: { data?: Buffer | ReadStream },
    options?: RawAxiosRequestConfig,
  ) => {
    const { data } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesActionsZipUpload(eSignaturePackageId, data, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download the original attachment
   * @summary Obtain a download link of a specific attachment
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the attachments
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesAttachmentsActionsDownload = (
    eSignaturePackageId: string,
    id: string,
    formData: { duration?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesAttachmentsActionsDownload(
        eSignaturePackageId,
        id,
        duration,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create an attachment in the eSignature package, which must be in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
   * @summary Create an attachment
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} filename
   * @param {(Buffer | ReadStream)} data
   * @param {boolean} [isConfidential]
   * @param {string} [requestId]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesAttachmentsCreate = (
    eSignaturePackageId: string,
    formData: {
      filename: string;
      data: Buffer | ReadStream;
      isConfidential?: boolean;
      requestId?: string;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { filename, data, isConfidential, requestId } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesAttachmentsCreate(
        eSignaturePackageId,
        filename,
        data,
        isConfidential,
        requestId,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
   * @summary Delete an attachment
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the attachment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesAttachmentsDelete = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesAttachmentsDelete(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List the attachments in the package
                        * @param {string} eSignaturePackageId Id of the eSignature package
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesAttachmentsList = (
    eSignaturePackageId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesAttachmentsList(
        eSignaturePackageId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an attachment
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the attachment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesAttachmentsRetrieve = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesAttachmentsRetrieve(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Only updates the metadata of attachment. This operation is only valid when the eSignature package is in valid signing status (i.e. `SENT`, `LIVE`, or `ACTIVE`).
   * @summary Update an attachment
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the attachment
   * @param {ESignaturePackagesAttachmentsUpdate} eSignaturePackagesAttachmentsUpdate
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesAttachmentsUpdate = (
    eSignaturePackageId: string,
    id: string,
    eSignaturePackagesAttachmentsUpdate: ESignaturePackagesAttachmentsUpdate,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesAttachmentsUpdate(
        eSignaturePackageId,
        id,
        eSignaturePackagesAttachmentsUpdate,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Obtain a secure link to be used for a ccRecipient who has a special role as OBSERVER or OBSERVER_ONLY. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED).
   * @summary Obtain observer link
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of ccRecipient
   * @param {ESignaturePackagesCCRecipientsObtainObserverLinkParams} [eSignaturePackagesCCRecipientsObtainObserverLinkParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesCcRecipientsActionsObtainObserverLink = (
    eSignaturePackageId: string,
    id: string,
    eSignaturePackagesCCRecipientsObtainObserverLinkParams?: ESignaturePackagesCCRecipientsObtainObserverLinkParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCcRecipientsActionsObtainObserverLink(
        eSignaturePackageId,
        id,
        eSignaturePackagesCCRecipientsObtainObserverLinkParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a ccRecipient in the eSignature package, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
   * @summary Create a ccRecipient
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignatureCCRecipient} eSignatureCCRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesCcRecipientsCreate = (
    eSignaturePackageId: string,
    eSignatureCCRecipient: ESignatureCCRecipient,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCcRecipientsCreate(
        eSignaturePackageId,
        eSignatureCCRecipient,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
   * @summary Delete a ccRecipient
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the ccRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesCcRecipientsDelete = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCcRecipientsDelete(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List all cc-recipients
                        * @param {string} eSignaturePackageId Id of the eSignature package
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesCcRecipientsList = (
    eSignaturePackageId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCcRecipientsList(
        eSignaturePackageId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a ccRecipient
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the ccRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesCcRecipientsRetrieve = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCcRecipientsRetrieve(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
   * @summary Update a ccRecipient
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the ccRecipient
   * @param {ESignatureCCRecipient} eSignatureCCRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesCcRecipientsUpdate = (
    eSignaturePackageId: string,
    id: string,
    eSignatureCCRecipient: ESignatureCCRecipient,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCcRecipientsUpdate(
        eSignaturePackageId,
        id,
        eSignatureCCRecipient,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Creates an eSignature package and sets it initially in the `DRAFT` status.
   * @summary Create an eSignature package
   * @param {ESignaturePackagesCreateParams} eSignaturePackagesCreateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesCreate = (
    eSignaturePackagesCreateParams: ESignaturePackagesCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesCreate(eSignaturePackagesCreateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Deletes the eSignature package if it in the `DRAFT` or `CANCELLED` statuses. If the eSignature package is in the `COMPLETED` it will be deleted from the account, but archived according Pactima\'s retention policy.
   * @summary Delete an eSignature package
   * @param {string} id Id of the eSignature package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDelete = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Apply eSignature template fields to specific document. The document must be in a `DRAFT` or `LIVE_EDITING` status
   * @summary Apply template fields to specific document
   * @param {string} eSignaturePackageId ID of ESignaturePackage
   * @param {string} id ID of document where fields need to be applied
   * @param {ESignaturePackagesDocumentsApplyTemplateParams} eSignaturePackagesDocumentsApplyTemplateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsActionsApplyTemplate = (
    eSignaturePackageId: string,
    id: string,
    eSignaturePackagesDocumentsApplyTemplateParams: ESignaturePackagesDocumentsApplyTemplateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsActionsApplyTemplate(
        eSignaturePackageId,
        id,
        eSignaturePackagesDocumentsApplyTemplateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download the PDF version of an uploaded document.
   * @summary Obtain a download link of a specific document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of document
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsActionsDownload = (
    eSignaturePackageId: string,
    id: string,
    formData: { duration?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsActionsDownload(
        eSignaturePackageId,
        id,
        duration,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Reorder documents given a referenced array of document ids. The package must be in a draft status, (i.e. DRAFT or LIVE_EDITING)
   * @summary Reorder documents
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignaturePackagesDocumentsReorderParams} eSignaturePackagesDocumentsReorderParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsActionsReorder = (
    eSignaturePackageId: string,
    eSignaturePackagesDocumentsReorderParams: ESignaturePackagesDocumentsReorderParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsActionsReorder(
        eSignaturePackageId,
        eSignaturePackagesDocumentsReorderParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a document in the eSignature package, the latter must be in either `DRAFT` or `LIVE_EDITING` status.
   * @summary Create a document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} name Name of the document
   * @param {(Buffer | ReadStream)} [data]
   * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsCreate = (
    eSignaturePackageId: string,
    formData: {
      name: string;
      data?: Buffer | ReadStream;
      pageRotations?: Array<ESignaturePageRotation>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { name, data, pageRotations } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsCreate(
        eSignaturePackageId,
        name,
        data,
        pageRotations,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
   * @summary Delete a document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the document
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsDelete = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsDelete(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
   * @summary Create multiple entry pads in a document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} documentId Id of the document
   * @param {ESignaturePackagesDocumentsEntryPadsBulkCreateParams} eSignaturePackagesDocumentsEntryPadsBulkCreateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsEntryPadsActionsBulkCreate = (
    eSignaturePackageId: string,
    documentId: string,
    eSignaturePackagesDocumentsEntryPadsBulkCreateParams: ESignaturePackagesDocumentsEntryPadsBulkCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsActionsBulkCreate(
        eSignaturePackageId,
        documentId,
        eSignaturePackagesDocumentsEntryPadsBulkCreateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Delete an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses, or in LIVE with live editing.
   * @summary Delete multiple entry pads in a document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} documentId Id of the document
   * @param {ESignaturePackagesDocumentsEntryPadsBulkDeleteParams} eSignaturePackagesDocumentsEntryPadsBulkDeleteParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsEntryPadsActionsBulkDelete = (
    eSignaturePackageId: string,
    documentId: string,
    eSignaturePackagesDocumentsEntryPadsBulkDeleteParams: ESignaturePackagesDocumentsEntryPadsBulkDeleteParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsActionsBulkDelete(
        eSignaturePackageId,
        documentId,
        eSignaturePackagesDocumentsEntryPadsBulkDeleteParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
   * @summary Create an entry pad
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} documentId Id of the document
   * @param {ESignatureEntryPad} eSignatureEntryPad
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsEntryPadsCreate = (
    eSignaturePackageId: string,
    documentId: string,
    eSignatureEntryPad: ESignatureEntryPad,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsCreate(
        eSignaturePackageId,
        documentId,
        eSignatureEntryPad,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
   * @summary Delete an entry pad
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} documentId Id of the document
   * @param {string} id Id of the entry pad
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsEntryPadsDelete = (
    eSignaturePackageId: string,
    documentId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsDelete(
        eSignaturePackageId,
        documentId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List entry pads in a document
                        * @param {string} eSignaturePackageId Id of the eSignature package
                        * @param {string} documentId Id of the document
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesDocumentsEntryPadsList = (
    eSignaturePackageId: string,
    documentId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsList(
        eSignaturePackageId,
        documentId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an entry pad
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} documentId Id of the document
   * @param {string} id Id of the entry pad
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsEntryPadsRetrieve = (
    eSignaturePackageId: string,
    documentId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsRetrieve(
        eSignaturePackageId,
        documentId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
   * @summary Update an entry pad
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} documentId Id of the document
   * @param {string} id Id of the entry pad
   * @param {ESignaturePackagesDocumentsEntryPadsUpdateParams} eSignaturePackagesDocumentsEntryPadsUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsEntryPadsUpdate = (
    eSignaturePackageId: string,
    documentId: string,
    id: string,
    eSignaturePackagesDocumentsEntryPadsUpdateParams: ESignaturePackagesDocumentsEntryPadsUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsEntryPadsUpdate(
        eSignaturePackageId,
        documentId,
        id,
        eSignaturePackagesDocumentsEntryPadsUpdateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * List all the documents that are part of this eSignature package
                * @summary List all documents
                        * @param {string} eSignaturePackageId Id of the eSignature package
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesDocumentsList = (
    eSignaturePackageId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsList(
        eSignaturePackageId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the document
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsRetrieve = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsRetrieve(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT` or `LIVE_EDITING` status.
   * @summary Update a document
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the document
   * @param {string} [name] Name of the document
   * @param {(Buffer | ReadStream)} [data]
   * @param {Array<ESignaturePageRotation>} [pageRotations]
   * @param {Array<EasySignInput>} [easySignInputs]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesDocumentsUpdate = (
    eSignaturePackageId: string,
    id: string,
    formData: {
      name?: string;
      data?: Buffer | ReadStream;
      pageRotations?: Array<ESignaturePageRotation>;
      easySignInputs?: Array<EasySignInput>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { name, data, pageRotations, easySignInputs } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesDocumentsUpdate(
        eSignaturePackageId,
        id,
        name,
        data,
        pageRotations,
        easySignInputs,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a joint signers groups in the eSignature package, only valid signers can be added to a joint signers group.
   * @summary Create a joint signers group
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignatureJointSignersGroup} eSignatureJointSignersGroup
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesJointSignersGroupsCreate = (
    eSignaturePackageId: string,
    eSignatureJointSignersGroup: ESignatureJointSignersGroup,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesJointSignersGroupsCreate(
        eSignaturePackageId,
        eSignatureJointSignersGroup,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Delete the specified joint signers group
   * @summary Delete a joint signers group
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the joint signers group
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesJointSignersGroupsDelete = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesJointSignersGroupsDelete(
        eSignaturePackageId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List all joint signers groups in an eSignature package
                        * @param {string} eSignaturePackageId Id of the eSignature package
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesJointSignersGroupsList = (
    eSignaturePackageId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesJointSignersGroupsList(
        eSignaturePackageId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a joint signers group
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the joint signers group
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesJointSignersGroupsRetrieve = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesJointSignersGroupsRetrieve(
        eSignaturePackageId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Update the specified joint signers group.
   * @summary Update a joint signers group
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the joint signers group
   * @param {ESignaturePackagesJointSignersGroupsUpdateParams} eSignaturePackagesJointSignersGroupsUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesJointSignersGroupsUpdate = (
    eSignaturePackageId: string,
    id: string,
    eSignaturePackagesJointSignersGroupsUpdateParams: ESignaturePackagesJointSignersGroupsUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesJointSignersGroupsUpdate(
        eSignaturePackageId,
        id,
        eSignaturePackagesJointSignersGroupsUpdateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
                * @summary List all eSignature packages
                            * @param { 
                    limit?: {number}, 
                    skip?: {number}, 
                    kind?: {ESignatureKindEnum}, 
                    isENotary?: {boolean}, 
                    excludeBulkSentPackage?: {boolean}, 
                    searchTerm?: {string}, 
                    updatedAtStartDate?: {string}, 
                    updatedAtEndDate?: {string}, 
                    statuses?: {Array<ESignatureStatusEnum>}, 
                    packageFolderIds?: {Array<string>}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesList = (
    params?: {
      limit?: number;
      skip?: number;
      kind?: ESignatureKindEnum;
      isENotary?: boolean;
      excludeBulkSentPackage?: boolean;
      searchTerm?: string;
      updatedAtStartDate?: string;
      updatedAtEndDate?: string;
      statuses?: Array<ESignatureStatusEnum>;
      packageFolderIds?: Array<string>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const {
      limit,
      skip,
      kind,
      isENotary,
      excludeBulkSentPackage,
      searchTerm,
      updatedAtStartDate,
      updatedAtEndDate,
      statuses,
      packageFolderIds,
    } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesList(
        limit,
        skip,
        kind,
        isENotary,
        excludeBulkSentPackage,
        searchTerm,
        updatedAtStartDate,
        updatedAtEndDate,
        statuses,
        packageFolderIds,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download for a recording
   * @summary Obtain a download link of a specific recording
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the recording
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesRecordingsDownload = (
    eSignaturePackageId: string,
    id: string,
    formData: { duration?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesRecordingsDownload(
        eSignaturePackageId,
        id,
        duration,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List the recordings in the package
                        * @param {string} eSignaturePackageId Id of the eSignature package
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesRecordingsList = (
    eSignaturePackageId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesRecordingsList(
        eSignaturePackageId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a recording
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the attachment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesRecordingsRetrieve = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesRecordingsRetrieve(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an eSignature package
   * @param {string} id Id of the eSignature package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesRetrieve = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesRetrieve(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Send a reminder to the signer by email.
   * @summary Send a reminder to a signer by email
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the signer
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersActionsSendReminderByEmail = (
    eSignaturePackageId: string,
    id: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersActionsSendReminderByEmail(
        eSignaturePackageId,
        id,
        body,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Send a reminder to the signer by SMS.
   * @summary Send a reminder to a signer by SMS
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the signer
   * @param {ESignaturePackagesSignersSendReminderBySMSParams} [eSignaturePackagesSignersSendReminderBySMSParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersActionsSendReminderBySMS = (
    eSignaturePackageId: string,
    id: string,
    eSignaturePackagesSignersSendReminderBySMSParams?: ESignaturePackagesSignersSendReminderBySMSParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersActionsSendReminderBySMS(
        eSignaturePackageId,
        id,
        eSignaturePackagesSignersSendReminderBySMSParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create an attachment request for for a signer. This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the status is `SENT`, the signer should not have already SIGNED.
   * @summary Create an attachment request
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} signerId Id of the signer
   * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersAttachmentRequestsCreate = (
    eSignaturePackageId: string,
    signerId: string,
    eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersAttachmentRequestsCreate(
        eSignaturePackageId,
        signerId,
        eSignatureSignerAttachmentRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
   * @summary Delete a signer attachment request
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} signerId Id of the signer
   * @param {string} id Id of the attachment request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersAttachmentRequestsDelete = (
    eSignaturePackageId: string,
    signerId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersAttachmentRequestsDelete(
        eSignaturePackageId,
        signerId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List attachment requests
                        * @param {string} eSignaturePackageId Id of the eSignature package
                        * @param {string} signerId Id of the signer
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesSignersAttachmentRequestsList = (
    eSignaturePackageId: string,
    signerId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersAttachmentRequestsList(
        eSignaturePackageId,
        signerId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an attachment request
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} signerId Id of the signer
   * @param {string} id Id of the attachment request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersAttachmentRequestsRetrieve = (
    eSignaturePackageId: string,
    signerId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersAttachmentRequestsRetrieve(
        eSignaturePackageId,
        signerId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses, and the signer hasn\'t SIGNED.
   * @summary Update an attachment request
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} signerId Id of the signer
   * @param {string} id Id of the attachment request
   * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersAttachmentRequestsUpdate = (
    eSignaturePackageId: string,
    signerId: string,
    id: string,
    eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersAttachmentRequestsUpdate(
        eSignaturePackageId,
        signerId,
        id,
        eSignatureSignerAttachmentRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a signer in the eSignature package, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
   * @summary Create a signer
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {ESignatureSignerENotary} eSignatureSignerENotary
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersCreate = (
    eSignaturePackageId: string,
    eSignatureSignerENotary: ESignatureSignerENotary,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersCreate(
        eSignaturePackageId,
        eSignatureSignerENotary,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
   * @summary Delete a signer
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the signer
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersDelete = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersDelete(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List all signers
                        * @param {string} eSignaturePackageId Id of the eSignature package
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignaturePackagesSignersList = (
    eSignaturePackageId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersList(eSignaturePackageId, limit, skip, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Obtain a secure link to be used for signing. This link can be embedded using an iframe or used directly via the browser. The package must be awaiting signing or is signing status (i.e. DRAFT, DECLINED, CANCELLED, or COMPLETED). The signer should
   * @summary Obtain signing link
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the signer
   * @param {ESignaturePackagesSignersObtainSigningLinkParams} [eSignaturePackagesSignersObtainSigningLinkParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersObtainSigningLink = (
    eSignaturePackageId: string,
    id: string,
    eSignaturePackagesSignersObtainSigningLinkParams?: ESignaturePackagesSignersObtainSigningLinkParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersObtainSigningLink(
        eSignaturePackageId,
        id,
        eSignaturePackagesSignersObtainSigningLinkParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a signer
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the signer
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersRetrieve = (
    eSignaturePackageId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersRetrieve(eSignaturePackageId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature package is in the `DRAFT`, `SENT`, `SCHEDULED`, `ACTIVE`, or `LIVE_EDITING` statuses. If the eSignature package is in `DRAFT` status, there are no webhooks and further actions that are triggered. If the eSignature package is in the `SENT` or `SCHEDULED` statuses, a change will be made and a notification webhook may be triggered if a signer\'s email is changed.
   * @summary Update a signer
   * @param {string} eSignaturePackageId Id of the eSignature package
   * @param {string} id Id of the signer
   * @param {ESignatureSignerENotary} eSignatureSignerENotary
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesSignersUpdate = (
    eSignaturePackageId: string,
    id: string,
    eSignatureSignerENotary: ESignatureSignerENotary,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesSignersUpdate(
        eSignaturePackageId,
        id,
        eSignatureSignerENotary,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Update an eSignature package, which must be in `DRAFT` status.
   * @summary Update an eSignature package
   * @param {string} id Id of the eSignature package
   * @param {ESignaturePackagesUpdateParams} eSignaturePackagesUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignaturePackagesUpdate = (
    id: string,
    eSignaturePackagesUpdateParams: ESignaturePackagesUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignaturePackagesUpdate(id, eSignaturePackagesUpdateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download the PDF version of an uploaded document.
   * @summary Download pdf version of template
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 minutes and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesActionsDownload = (
    eSignatureTemplateId: string,
    formData: { duration?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesActionsDownload(
        eSignatureTemplateId,
        duration,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a package using an eSignature template
   * @summary Create an eSignature package using an eSignature template
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} title Name/title of the template
   * @param {Array<ESignatureTemplatesActionsForkSignersMapping>} signersMapping
   * @param {string} [description] Description of the template
   * @param {ESignatureKindEnum} [kind]
   * @param {Array<ESignatureTemplatesActionsForkCcRecipientsMapping>} [ccRecipientsMapping]
   * @param {Array<ESignatureTemplateDocumentFieldMapping>} [documentFieldMappings] These are the fields for documents, i.e. \\\&quot;documents::x\\\&quot;, it\\\&#39;ll be x
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesActionsFork = (
    eSignatureTemplateId: string,
    formData: {
      title: string;
      description?: string;
      kind?: ESignatureKindEnum;
      signersMapping: Array<ESignatureTemplatesActionsForkSignersMapping>;
      ccRecipientsMapping?: Array<ESignatureTemplatesActionsForkCcRecipientsMapping>;
      documentFieldMappings?: Array<ESignatureTemplateDocumentFieldMapping>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const {
      title,
      description,
      kind,
      signersMapping,
      ccRecipientsMapping,
      documentFieldMappings,
    } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesActionsFork(
        eSignatureTemplateId,
        title,
        signersMapping,
        description,
        kind,
        ccRecipientsMapping,
        documentFieldMappings,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a ccRecipient in the eSignature template, which must not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
   * @summary Create a ccRecipient
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {ESignatureTemplateRecipient} eSignatureTemplateRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesCcRecipientsCreate = (
    eSignatureTemplateId: string,
    eSignatureTemplateRecipient: ESignatureTemplateRecipient,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesCcRecipientsCreate(
        eSignatureTemplateId,
        eSignatureTemplateRecipient,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
   * @summary Delete a ccRecipient
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the ccRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesCcRecipientsDelete = (
    eSignatureTemplateId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesCcRecipientsDelete(eSignatureTemplateId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List all cc-recipients
                        * @param {string} eSignatureTemplateId Id of the eSignature template
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesCcRecipientsList = (
    eSignatureTemplateId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesCcRecipientsList(
        eSignatureTemplateId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a ccRecipient
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the ccRecipient
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesCcRecipientsRetrieve = (
    eSignatureTemplateId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesCcRecipientsRetrieve(
        eSignatureTemplateId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature template is not be in a resting status, i.e. `COMPLETED`, `DECLINED`, or `CANCELLED`
   * @summary Update a ccRecipient
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the ccRecipient
   * @param {ESignatureTemplatesCcRecipientsUpdateParams} eSignatureTemplatesCcRecipientsUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesCcRecipientsUpdate = (
    eSignatureTemplateId: string,
    id: string,
    eSignatureTemplatesCcRecipientsUpdateParams: ESignatureTemplatesCcRecipientsUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesCcRecipientsUpdate(
        eSignatureTemplateId,
        id,
        eSignatureTemplatesCcRecipientsUpdateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Creates an eSignature template
   * @summary Create a template
   * @param {ESignatureTemplatesCreateParams} eSignatureTemplatesCreateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesCreate = (
    eSignatureTemplatesCreateParams: ESignatureTemplatesCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesCreate(eSignatureTemplatesCreateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Deletes the eSignature template
   * @summary Delete a template
   * @param {string} id Id of the eSignature template
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDelete = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Reorder documents given a referenced array of document ids.
   * @summary Reorder documents
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {ESignatureTemplatesDocumentsReorderParams} eSignatureTemplatesDocumentsReorderParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsActionsReorder = (
    eSignatureTemplateId: string,
    eSignatureTemplatesDocumentsReorderParams: ESignatureTemplatesDocumentsReorderParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsActionsReorder(
        eSignatureTemplateId,
        eSignatureTemplatesDocumentsReorderParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a document in the eSignature template
   * @summary Create a document
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} name Name of the document
   * @param {(Buffer | ReadStream)} [data] Only required if the KIND is regular
   * @param {Array<ESignaturePageRotation>} [pageRotations] Only valid page rotations will be entered in the document. Rotations outside the page count or valid rotation (i.e. 90, 180, or 270) will be discarded.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsCreate = (
    eSignatureTemplateId: string,
    formData: {
      name: string;
      data?: Buffer | ReadStream;
      pageRotations?: Array<ESignaturePageRotation>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { name, data, pageRotations } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsCreate(
        eSignatureTemplateId,
        name,
        data,
        pageRotations,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Delete a document in an eSignature template
   * @summary Delete a document
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the document
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsDelete = (
    eSignatureTemplateId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsDelete(eSignatureTemplateId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Bulk create entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
   * @summary Bulk create entry pads
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} documentId Id of the document
   * @param {ESignatureTemplatesDocumentsEntryPadsBulkCreateParams} eSignatureTemplatesDocumentsEntryPadsBulkCreateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate = (
    eSignatureTemplateId: string,
    documentId: string,
    eSignatureTemplatesDocumentsEntryPadsBulkCreateParams: ESignatureTemplatesDocumentsEntryPadsBulkCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate(
        eSignatureTemplateId,
        documentId,
        eSignatureTemplatesDocumentsEntryPadsBulkCreateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Bulk delete entry pads in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
   * @summary Bulk delete entry pads
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} documentId Id of the document
   * @param {ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams} eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete = (
    eSignatureTemplateId: string,
    documentId: string,
    eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams: ESignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete(
        eSignatureTemplateId,
        documentId,
        eSignatureTemplatesDocumentsEntryPadsBulkDeleteParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create an entry pad in the document, which must be in either `DRAFT` or `LIVE_EDITING` statuses.
   * @summary Create an entry pad
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} documentId Id of the document
   * @param {ESignatureEntryPad} eSignatureEntryPad
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsEntryPadsCreate = (
    eSignatureTemplateId: string,
    documentId: string,
    eSignatureEntryPad: ESignatureEntryPad,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsCreate(
        eSignatureTemplateId,
        documentId,
        eSignatureEntryPad,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
   * @summary Delete an entry pad
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} documentId Id of the document
   * @param {string} id Id of the entry pad
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsEntryPadsDelete = (
    eSignatureTemplateId: string,
    documentId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsDelete(
        eSignatureTemplateId,
        documentId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List entry pads in a document
                        * @param {string} eSignatureTemplateId Id of the eSignature template
                        * @param {string} documentId Id of the document
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesDocumentsEntryPadsList = (
    eSignatureTemplateId: string,
    documentId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsList(
        eSignatureTemplateId,
        documentId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an entry pad
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} documentId Id of the document
   * @param {string} id Id of the entry pad
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsEntryPadsRetrieve = (
    eSignatureTemplateId: string,
    documentId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsRetrieve(
        eSignatureTemplateId,
        documentId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * This operation is only valid when the eSignature template is in the `DRAFT` or `LIVE_EDITING` status.
   * @summary Update an entry pad
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} documentId Id of the document
   * @param {string} id Id of the entry pad
   * @param {ESignatureTemplatesDocumentsEntryPadsUpdateParams} eSignatureTemplatesDocumentsEntryPadsUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsEntryPadsUpdate = (
    eSignatureTemplateId: string,
    documentId: string,
    id: string,
    eSignatureTemplatesDocumentsEntryPadsUpdateParams: ESignatureTemplatesDocumentsEntryPadsUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsEntryPadsUpdate(
        eSignatureTemplateId,
        documentId,
        id,
        eSignatureTemplatesDocumentsEntryPadsUpdateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * List all the documents that are part of this eSignature template
                * @summary List all documents
                        * @param {string} eSignatureTemplateId Id of the eSignature template
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesDocumentsList = (
    eSignatureTemplateId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsList(
        eSignatureTemplateId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a document
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the document
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsRetrieve = (
    eSignatureTemplateId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsRetrieve(eSignatureTemplateId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Update the document in an eSignature template
   * @summary Update a document
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the document
   * @param {string} [name] Name of the document
   * @param {(Buffer | ReadStream)} [data]
   * @param {Array<ESignaturePageRotation>} [pageRotations]
   * @param {Array<EasySignInput>} [easySignInputs]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesDocumentsUpdate = (
    eSignatureTemplateId: string,
    id: string,
    formData: {
      name?: string;
      data?: Buffer | ReadStream;
      pageRotations?: Array<ESignaturePageRotation>;
      easySignInputs?: Array<EasySignInput>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { name, data, pageRotations, easySignInputs } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesDocumentsUpdate(
        eSignatureTemplateId,
        id,
        name,
        data,
        pageRotations,
        easySignInputs,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * Returns a list of objects. The objects are turned sorted by the updated date, with the most recently created appearing first.
                * @summary List all templates
                            * @param { 
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesList = (
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesList(limit, skip, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a template
   * @param {string} id Id of the eSignature template
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesRetrieve = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesRetrieve(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create an attachment request for for a signer.
   * @summary Create an attachment request
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} signerId Id of the signer
   * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersAttachmentRequestsCreate = (
    eSignatureTemplateId: string,
    signerId: string,
    eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersAttachmentRequestsCreate(
        eSignatureTemplateId,
        signerId,
        eSignatureSignerAttachmentRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Delete an attachment request
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} signerId Id of the signer
   * @param {string} id Id of the attachment request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersAttachmentRequestsDelete = (
    eSignatureTemplateId: string,
    signerId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersAttachmentRequestsDelete(
        eSignatureTemplateId,
        signerId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List attachment requests
                        * @param {string} eSignatureTemplateId Id of the eSignature template
                        * @param {string} signerId Id of the signer
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesSignersAttachmentRequestsList = (
    eSignatureTemplateId: string,
    signerId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersAttachmentRequestsList(
        eSignatureTemplateId,
        signerId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an attachment request
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} signerId Id of the signer
   * @param {string} id Id of the attachment request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersAttachmentRequestsRetrieve = (
    eSignatureTemplateId: string,
    signerId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersAttachmentRequestsRetrieve(
        eSignatureTemplateId,
        signerId,
        id,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Update an attachment request
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} signerId Id of the signer
   * @param {string} id Id of the attachment request
   * @param {ESignatureSignerAttachmentRequest} eSignatureSignerAttachmentRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersAttachmentRequestsUpdate = (
    eSignatureTemplateId: string,
    signerId: string,
    id: string,
    eSignatureSignerAttachmentRequest: ESignatureSignerAttachmentRequest,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersAttachmentRequestsUpdate(
        eSignatureTemplateId,
        signerId,
        id,
        eSignatureSignerAttachmentRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a signer in the eSignature template.
   * @summary Create a signer
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersCreate = (
    eSignatureTemplateId: string,
    eSignatureTemplateSigner: ESignatureTemplateSigner,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersCreate(
        eSignatureTemplateId,
        eSignatureTemplateSigner,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Remove the signer for the template. Also removes their respective entry pads.
   * @summary Delete a signer
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the signer
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersDelete = (
    eSignatureTemplateId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersDelete(eSignatureTemplateId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List all signers
                        * @param {string} eSignatureTemplateId Id of the eSignature template
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesSignersList = (
    eSignatureTemplateId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersList(
        eSignatureTemplateId,
        limit,
        skip,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve a signer
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the signer
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersRetrieve = (
    eSignatureTemplateId: string,
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersRetrieve(eSignatureTemplateId, id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Update a signer
   * @param {string} eSignatureTemplateId Id of the eSignature template
   * @param {string} id Id of the signer
   * @param {ESignatureTemplateSigner} eSignatureTemplateSigner
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesSignersUpdate = (
    eSignatureTemplateId: string,
    id: string,
    eSignatureTemplateSigner: ESignatureTemplateSigner,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesSignersUpdate(
        eSignatureTemplateId,
        id,
        eSignatureTemplateSigner,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Share a new eSignature Template to the team. Only the owner of the template can share it with the team.
   * @summary Share owned template with the team
   * @param {ESignatureTemplatesTeamTemplatesCreateParams} eSignatureTemplatesTeamTemplatesCreateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesTeamTemplatesCreate = (
    eSignatureTemplatesTeamTemplatesCreateParams: ESignatureTemplatesTeamTemplatesCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesTeamTemplatesCreate(
        eSignatureTemplatesTeamTemplatesCreateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Remove a template from the template. Must be the owner of the template, or the owner or admin of the team
   * @summary Remove template from the team
   * @param {string} id ID of template
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesTeamTemplatesDelete = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesTeamTemplatesDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * List all the signature templates that belong to the team that the requester is part of.
                * @summary List all signature templates that belong to a team
                            * @param { 
                    limit?: {number}, 
                    skip?: {number}, 
                    teamId?: {string}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _eSignatureTemplatesTeamTemplatesList = (
    params?: { limit?: number; skip?: number; teamId?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip, teamId } = params ?? {};
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesTeamTemplatesList(limit, skip, teamId, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Update an eSignature template.
   * @summary Update a template
   * @param {string} id Id of the eSignature template
   * @param {ESignatureTemplatesUpdateParams} eSignatureTemplatesUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _eSignatureTemplatesUpdate = (
    id: string,
    eSignatureTemplatesUpdateParams: ESignatureTemplatesUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .eSignatureTemplatesUpdate(id, eSignatureTemplatesUpdateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Can only cancel if the package is the `IN PROGRESS` status
   * @summary Cancel an identity verification package
   * @param {string} id ID of the verification package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsCancel = (
    id: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsCancel(id, body, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Create an identity verification package
   * @param {IdentityVerificationsCreateParams} [identityVerificationsCreateParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsCreate = (
    identityVerificationsCreateParams?: IdentityVerificationsCreateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsCreate(identityVerificationsCreateParams, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Delete an identity verification package specified by id
   * @param {string} id ID of identity verification package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsDelete = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsDelete(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Create a link to download the audit trail.
   * @summary Obtain download link for audit trail
   * @param {string} id ID of the verification package
   * @param {string} [duration] Time span expressed as [vercel/ms](https://github.com/vercel/ms), with only string values accepted. There is a minimum of 5 mins and maximum of 1 year. (E.g. \\\&quot;2 days\\\&quot;, \\\&quot;10h\\\&quot;, \\\&quot;7d\\\&quot;, without an time units, the default is milliseconds, i.e. \\\&quot;120\\\&quot; equals \\\&quot;120ms\\\&quot; )
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsDownloadAuditTrail = (
    id: string,
    formData: { duration?: string },
    options?: RawAxiosRequestConfig,
  ) => {
    const { duration } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .identityVerificationsDownloadAuditTrail(id, duration, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * 
                * @summary List identity verification packages that belong to the user
                            * @param { 
                    limit?: {number}, 
                    skip?: {number}, 
                    ids?: {Array<string>}, 
                    standalone?: {boolean}, 
                    status?: {IdentityVerificationStatusEnum}, 
                    statuses?: {Array<IdentityVerificationStatusEnum>}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _identityVerificationsList = (
    params?: {
      limit?: number;
      skip?: number;
      ids?: Array<string>;
      standalone?: boolean;
      status?: IdentityVerificationStatusEnum;
      statuses?: Array<IdentityVerificationStatusEnum>;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip, ids, standalone, status, statuses } = params ?? {};
    return PactimaApiFp(this.configuration)
      .identityVerificationsList(
        limit,
        skip,
        ids,
        standalone,
        status,
        statuses,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   * Retrieve advanced options for an identity verification package
   * @summary Retrieve advanced options for an identity verification package
   * @param {string} id ID of the verification package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsObtainAdvancedOptions = (
    id: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsObtainAdvancedOptions(id, body, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Get a link with a smart token to authenticate respondent
   * @param {string} id ID of the verification package
   * @param {IdentityVerificationsObtainRespondentLinkRequestParams} [identityVerificationsObtainRespondentLinkRequestParams]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsObtainRespondentLink = (
    id: string,
    identityVerificationsObtainRespondentLinkRequestParams?: IdentityVerificationsObtainRespondentLinkRequestParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsObtainRespondentLink(
        id,
        identityVerificationsObtainRespondentLinkRequestParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Retrieve an identity verification package
   * @param {string} id ID of identity verification package
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsRetrieve = (
    id: string,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsRetrieve(id, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Start an id verification
   * @param {string} id ID of the verification package
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsStart = (
    id: string,
    body?: object,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsStart(id, body, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Submit a document for verification
   * @param {string} id ID of the verification package
   * @param {(Buffer | ReadStream)} frontImage
   * @param {IdentityVerificationDocumentTypeEnum} documentType
   * @param {string} documentCountry
   * @param {(Buffer | ReadStream)} [backImage]
   * @param {string} [documentState]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsSubmitDocument = (
    id: string,
    formData: {
      frontImage: Buffer | ReadStream;
      backImage?: Buffer | ReadStream;
      documentType: IdentityVerificationDocumentTypeEnum;
      documentCountry: string;
      documentState?: string;
    },
    options?: RawAxiosRequestConfig,
  ) => {
    const {
      frontImage,
      backImage,
      documentType,
      documentCountry,
      documentState,
    } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .identityVerificationsSubmitDocument(
        id,
        frontImage,
        documentType,
        documentCountry,
        backImage,
        documentState,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Update an identity verification package. Package must be in `DRAFT`
   * @param {string} id ID of identity verification package
   * @param {IdentityVerificationsUpdateParams} identityVerificationsUpdateParams
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsUpdate = (
    id: string,
    identityVerificationsUpdateParams: IdentityVerificationsUpdateParams,
    options?: RawAxiosRequestConfig,
  ) => {
    return PactimaApiFp(this.configuration)
      .identityVerificationsUpdate(
        id,
        identityVerificationsUpdateParams,
        options,
      )
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Add a video to verify liveness of the selfie
   * @param {string} id ID of the verification package
   * @param {(Buffer | ReadStream)} livenessVideo
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsUploadLiveness = (
    id: string,
    formData: { livenessVideo: Buffer | ReadStream },
    options?: RawAxiosRequestConfig,
  ) => {
    const { livenessVideo } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .identityVerificationsUploadLiveness(id, livenessVideo, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
   *
   * @summary Add a selfie to verify documents against
   * @param {string} id ID of the verification package
   * @param {(Buffer | ReadStream)} selfie
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PactimaApi
   */
  private _identityVerificationsUploadSelfie = (
    id: string,
    formData: { selfie: Buffer | ReadStream },
    options?: RawAxiosRequestConfig,
  ) => {
    const { selfie } = formData ?? {};
    return PactimaApiFp(this.configuration)
      .identityVerificationsUploadSelfie(id, selfie, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  /**
            * List all members that are part of the specified team
                * @summary List all members
                        * @param {string} teamId Id of the team
                    limit?: {number}, 
                    skip?: {number}
                         } [params] Query parameters.
            * @param {*} [options] Override http request option.
            * @throws {RequiredError}
            * @memberof PactimaApi
            */
  private _teamsMembersList = (
    teamId: string,
    params?: { limit?: number; skip?: number },
    options?: RawAxiosRequestConfig,
  ) => {
    const { limit, skip } = params ?? {};
    return PactimaApiFp(this.configuration)
      .teamsMembersList(teamId, limit, skip, options)
      .then((request) => request(this.axios, this.basePath))
      .then((x) => x.data);
  };

  eSignatureTemplates = {
    create: this._eSignatureTemplatesCreate,
    list: this._eSignatureTemplatesList,
    retrieve: this._eSignatureTemplatesRetrieve,
    update: this._eSignatureTemplatesUpdate,
    delete: this._eSignatureTemplatesDelete,
    signers: {
      create: this._eSignatureTemplatesSignersCreate,
      list: this._eSignatureTemplatesSignersList,
      retrieve: this._eSignatureTemplatesSignersRetrieve,
      update: this._eSignatureTemplatesSignersUpdate,
      delete: this._eSignatureTemplatesSignersDelete,
      attachmentRequests: {
        create: this._eSignatureTemplatesSignersAttachmentRequestsCreate,
        list: this._eSignatureTemplatesSignersAttachmentRequestsList,
        retrieve: this._eSignatureTemplatesSignersAttachmentRequestsRetrieve,
        update: this._eSignatureTemplatesSignersAttachmentRequestsUpdate,
        delete: this._eSignatureTemplatesSignersAttachmentRequestsDelete,
      },
    },
    ccRecipients: {
      create: this._eSignatureTemplatesCcRecipientsCreate,
      list: this._eSignatureTemplatesCcRecipientsList,
      retrieve: this._eSignatureTemplatesCcRecipientsRetrieve,
      update: this._eSignatureTemplatesCcRecipientsUpdate,
      delete: this._eSignatureTemplatesCcRecipientsDelete,
    },
    documents: {
      create: this._eSignatureTemplatesDocumentsCreate,
      list: this._eSignatureTemplatesDocumentsList,
      retrieve: this._eSignatureTemplatesDocumentsRetrieve,
      update: this._eSignatureTemplatesDocumentsUpdate,
      delete: this._eSignatureTemplatesDocumentsDelete,
      actions: {
        reorder: this._eSignatureTemplatesDocumentsActionsReorder,
      },
      entryPads: {
        create: this._eSignatureTemplatesDocumentsEntryPadsCreate,
        list: this._eSignatureTemplatesDocumentsEntryPadsList,
        retrieve: this._eSignatureTemplatesDocumentsEntryPadsRetrieve,
        update: this._eSignatureTemplatesDocumentsEntryPadsUpdate,
        delete: this._eSignatureTemplatesDocumentsEntryPadsDelete,
        actions: {
          bulkCreate:
            this._eSignatureTemplatesDocumentsEntryPadsActionsBulkCreate,
          bulkDelete:
            this._eSignatureTemplatesDocumentsEntryPadsActionsBulkDelete,
        },
      },
    },
    teamTemplates: {
      list: this._eSignatureTemplatesTeamTemplatesList,
      create: this._eSignatureTemplatesTeamTemplatesCreate,
      delete: this._eSignatureTemplatesTeamTemplatesDelete,
    },
    actions: {
      fork: this._eSignatureTemplatesActionsFork,
      download: this._eSignatureTemplatesActionsDownload,
    },
  };
  eSignaturePackages = {
    create: this._eSignaturePackagesCreate,
    list: this._eSignaturePackagesList,
    retrieve: this._eSignaturePackagesRetrieve,
    update: this._eSignaturePackagesUpdate,
    delete: this._eSignaturePackagesDelete,
    documents: {
      actions: {
        reorder: this._eSignaturePackagesDocumentsActionsReorder,
        applyTemplate: this._eSignaturePackagesDocumentsActionsApplyTemplate,
        download: this._eSignaturePackagesDocumentsActionsDownload,
      },
      create: this._eSignaturePackagesDocumentsCreate,
      list: this._eSignaturePackagesDocumentsList,
      retrieve: this._eSignaturePackagesDocumentsRetrieve,
      update: this._eSignaturePackagesDocumentsUpdate,
      delete: this._eSignaturePackagesDocumentsDelete,
      entryPads: {
        create: this._eSignaturePackagesDocumentsEntryPadsCreate,
        list: this._eSignaturePackagesDocumentsEntryPadsList,
        retrieve: this._eSignaturePackagesDocumentsEntryPadsRetrieve,
        update: this._eSignaturePackagesDocumentsEntryPadsUpdate,
        delete: this._eSignaturePackagesDocumentsEntryPadsDelete,
        actions: {
          bulkCreate:
            this._eSignaturePackagesDocumentsEntryPadsActionsBulkCreate,
          bulkDelete:
            this._eSignaturePackagesDocumentsEntryPadsActionsBulkDelete,
        },
      },
    },
    signers: {
      create: this._eSignaturePackagesSignersCreate,
      list: this._eSignaturePackagesSignersList,
      retrieve: this._eSignaturePackagesSignersRetrieve,
      update: this._eSignaturePackagesSignersUpdate,
      delete: this._eSignaturePackagesSignersDelete,
      attachmentRequests: {
        create: this._eSignaturePackagesSignersAttachmentRequestsCreate,
        list: this._eSignaturePackagesSignersAttachmentRequestsList,
        retrieve: this._eSignaturePackagesSignersAttachmentRequestsRetrieve,
        update: this._eSignaturePackagesSignersAttachmentRequestsUpdate,
        delete: this._eSignaturePackagesSignersAttachmentRequestsDelete,
      },
      obtainSigningLink: this._eSignaturePackagesSignersObtainSigningLink,
      actions: {
        sendReminderByEmail:
          this._eSignaturePackagesSignersActionsSendReminderByEmail,
        sendReminderBySMS:
          this._eSignaturePackagesSignersActionsSendReminderBySMS,
      },
    },
    ccRecipients: {
      create: this._eSignaturePackagesCcRecipientsCreate,
      list: this._eSignaturePackagesCcRecipientsList,
      retrieve: this._eSignaturePackagesCcRecipientsRetrieve,
      update: this._eSignaturePackagesCcRecipientsUpdate,
      delete: this._eSignaturePackagesCcRecipientsDelete,
      actions: {
        obtainObserverLink:
          this._eSignaturePackagesCcRecipientsActionsObtainObserverLink,
      },
    },
    jointSignersGroups: {
      create: this._eSignaturePackagesJointSignersGroupsCreate,
      list: this._eSignaturePackagesJointSignersGroupsList,
      retrieve: this._eSignaturePackagesJointSignersGroupsRetrieve,
      update: this._eSignaturePackagesJointSignersGroupsUpdate,
      delete: this._eSignaturePackagesJointSignersGroupsDelete,
    },
    attachments: {
      create: this._eSignaturePackagesAttachmentsCreate,
      list: this._eSignaturePackagesAttachmentsList,
      retrieve: this._eSignaturePackagesAttachmentsRetrieve,
      update: this._eSignaturePackagesAttachmentsUpdate,
      delete: this._eSignaturePackagesAttachmentsDelete,
      actions: {
        download: this._eSignaturePackagesAttachmentsActionsDownload,
      },
    },
    recordings: {
      list: this._eSignaturePackagesRecordingsList,
      retrieve: this._eSignaturePackagesRecordingsRetrieve,
      download: this._eSignaturePackagesRecordingsDownload,
    },
    actions: {
      trigger: this._eSignaturePackagesActionsTrigger,
      switchKind: this._eSignaturePackagesActionsSwitchKind,
      startSigningSession: this._eSignaturePackagesActionsStartSigningSession,
      endSigningSession: this._eSignaturePackagesActionsEndSigningSession,
      cancel: this._eSignaturePackagesActionsCancel,
      redraft: this._eSignaturePackagesActionsRedraft,
      transfer: this._eSignaturePackagesActionsTransfer,
      forward: this._eSignaturePackagesActionsForward,
      createTemplate: this._eSignaturePackagesActionsCreateTemplate,
      expressStart: this._eSignaturePackagesActionsExpressStart,
      enableRecording: this._eSignaturePackagesActionsEnableRecording,
      disableRecording: this._eSignaturePackagesActionsDisableRecording,
      download: this._eSignaturePackagesActionsDownload,
      downloadAuditTrails: this._eSignaturePackagesActionsDownloadAuditTrails,
      reuse: this._eSignaturePackagesActionsReuse,
      reschedule: this._eSignaturePackagesActionsReschedule,
      modifyAdvancedOptions:
        this._eSignaturePackagesActionsModifyAdvancedOptions,
      modifyMetadata: this._eSignaturePackagesActionsModifyMetadata,
      obtainPreparationLink:
        this._eSignaturePackagesActionsObtainPreparationLink,
      safeRetrieve: this._eSignaturePackagesActionsSafeRetrieve,
      obtainAdvancedOptions:
        this._eSignaturePackagesActionsObtainAdvancedOptions,
      zipUpload: this._eSignaturePackagesActionsZipUpload,
    },
  };
  identityVerifications = {
    create: this._identityVerificationsCreate,
    list: this._identityVerificationsList,
    retrieve: this._identityVerificationsRetrieve,
    delete: this._identityVerificationsDelete,
    update: this._identityVerificationsUpdate,
    submitDocument: this._identityVerificationsSubmitDocument,
    uploadSelfie: this._identityVerificationsUploadSelfie,
    uploadLiveness: this._identityVerificationsUploadLiveness,
    start: this._identityVerificationsStart,
    cancel: this._identityVerificationsCancel,
    obtainRespondentLink: this._identityVerificationsObtainRespondentLink,
    downloadAuditTrail: this._identityVerificationsDownloadAuditTrail,
    obtainAdvancedOptions: this._identityVerificationsObtainAdvancedOptions,
  };
  eNotaryPackages = {
    create: this._eNotaryPackagesCreate,
    list: this._eNotaryPackagesList,
    retrieve: this._eNotaryPackagesRetrieve,
    update: this._eNotaryPackagesUpdate,
    delete: this._eNotaryPackagesDelete,
    validationRequests: {
      create: this._eNotaryPackagesValidationRequestsCreate,
      update: this._eNotaryPackagesValidationRequestsUpdate,
      delete: this._eNotaryPackagesValidationRequestsDelete,
    },
    journal: {
      actions: {
        download: this._eNotaryPackagesJournalActionsDownload,
      },
    },
    actions: {
      resetAuthentication: this._eNotaryPackagesActionsResetAuthentication,
    },
  };
  teams = {
    members: {
      list: this._teamsMembersList,
    },
  };
}
