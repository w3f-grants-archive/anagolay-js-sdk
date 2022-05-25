## API Report File for "@anagolay/types"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="node" />

import type { AccountId } from '@polkadot/types/interfaces/runtime';
import type { AnagolayVersionExtra as AnagolayVersionExtra_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { BlockNumber } from '@polkadot/types/interfaces/runtime';
import type { bool } from '@polkadot/types-codec';
import type { BTreeMap } from '@polkadot/types-codec';
import type { Bytes } from '@polkadot/types-codec';
import type { Characters as Characters_2 } from '@anagolay/types/interfaces/anagolaySupport';
import { Codec } from '@polkadot/types/types';
import { CodecClass } from '@polkadot/types/types';
import type { CreatorId as CreatorId_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { Enum } from '@polkadot/types-codec';
import type { ForWhat as ForWhat_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { GenericId as GenericId_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { OperationId as OperationId_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { Option as Option_2 } from '@polkadot/types-codec';
import type { Struct } from '@polkadot/types-codec';
import type { u64 } from '@polkadot/types-codec';
import type { Vec } from '@polkadot/types-codec';
import type { VersionId as VersionId_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { WasmArtifactSubType as WasmArtifactSubType_2 } from '@anagolay/types/interfaces/anagolaySupport';
import type { WorkflowId as WorkflowId_2 } from '@anagolay/types/interfaces/anagolaySupport';

// @public (undocumented)
export type AnAccountId = string;

// @public
export interface AnagolayClaim extends Struct {
    // (undocumented)
    readonly claimType: AnagolayClaimType;
    // (undocumented)
    readonly expiration: Expiration;
    // (undocumented)
    readonly holder: CreatorId_2;
    // (undocumented)
    readonly issuer: Bytes;
    // (undocumented)
    readonly onExpiration: Bytes;
    // (undocumented)
    readonly poeId: GenericId_2;
    // (undocumented)
    readonly prevId: GenericId_2;
    // (undocumented)
    readonly proportion: Proportion;
    // (undocumented)
    readonly ruleId: GenericId_2;
    // (undocumented)
    readonly subjectId: GenericId_2;
    // (undocumented)
    readonly valid: Validity;
}

// @public
export interface AnagolayClaimType extends Enum {
    // (undocumented)
    readonly isCopyright: boolean;
    // (undocumented)
    readonly isOwnership: boolean;
    // (undocumented)
    readonly type: 'Copyright' | 'Ownership';
}

// @public
export interface AnagolaySignature extends Struct {
    // (undocumented)
    readonly cid: GenericId_2;
    // (undocumented)
    readonly sig: Bytes;
    // (undocumented)
    readonly sigKey: Bytes;
}

// @public
export interface AnagolaySignatures extends Struct {
    // (undocumented)
    readonly holder: AnagolaySignature;
    // (undocumented)
    readonly issuer: AnagolaySignature;
}

// @public
export interface AnagolayStatement extends Struct {
    // (undocumented)
    readonly data: StatementData;
    // (undocumented)
    readonly extra: Option_2<StatementExtra>;
    // (undocumented)
    readonly id: GenericId_2;
}

// @public
export interface AnagolayStatementRecord extends Struct {
    // (undocumented)
    readonly accountId: AccountId;
    // (undocumented)
    readonly blockNumber: BlockNumber;
    // (undocumented)
    readonly record: AnagolayStatement;
}

// @public (undocumented)
export const anagolaySupport: {
    types: {
        [x: string]: string | Record<string, string> | CodecClass<Codec> | {
            _enum: string[] | Record<string, number> | Record<string, string | null>;
        } | {
            _set: Record<string, number>;
        };
    };
};

// @public
export interface AnagolayVersionExtra extends Struct {
    // (undocumented)
    readonly createdAt: u64;
}

// @public (undocumented)
export interface AnAnagolayClaim {
    // (undocumented)
    claimType: AnAnagolayClaimType;
    // (undocumented)
    expiration: AnExpiration;
    // (undocumented)
    holder: AnCreatorId;
    // (undocumented)
    issuer: string;
    // (undocumented)
    onExpiration: string;
    // (undocumented)
    poeId: AnGenericId;
    // (undocumented)
    prevId: AnGenericId;
    // (undocumented)
    proportion: AnProportion;
    // (undocumented)
    ruleId: AnGenericId;
    // (undocumented)
    subjectId: AnGenericId;
    // (undocumented)
    valid: AnValidity;
}

// @public (undocumented)
export enum AnAnagolayClaimType {
    // (undocumented)
    COPYRIGHT = 0,
    // (undocumented)
    OWNERSHIP = 1
}

// @public (undocumented)
export interface AnAnagolayCopyrightClaim extends AnAnagolayClaim {
    // (undocumented)
    claimType: AnAnagolayClaimType.COPYRIGHT;
}

// @public (undocumented)
export interface AnAnagolayOwnershipClaim extends AnAnagolayClaim {
    // (undocumented)
    claimType: AnAnagolayClaimType.OWNERSHIP;
}

// @public (undocumented)
export interface AnAnagolaySignature {
    // (undocumented)
    cid: AnGenericId;
    // (undocumented)
    sig: string;
    // (undocumented)
    sigKey: string;
}

// @public (undocumented)
export interface AnAnagolaySignatures {
    // (undocumented)
    holder: AnAnagolaySignature;
    // (undocumented)
    issuer: AnAnagolaySignature;
}

// @public (undocumented)
export interface AnAnagolayStatement {
    // (undocumented)
    data: AnStatementData;
    // (undocumented)
    id: AnGenericId;
}

// @public (undocumented)
export interface AnAnagolayVersionExtra {
    // (undocumented)
    createdAt: number;
}

// @public (undocumented)
export type AnAny = any;

// @public (undocumented)
export type AnArtifactId = AnGenericId;

// @public (undocumented)
export type AnBlockNumber = number;

// @public (undocumented)
export type AnBoolean = boolean;

// @public (undocumented)
export type AnBuffer = Buffer;

// @public (undocumented)
export type AnByteArray = Uint8Array;

// @public (undocumented)
export type AnCharacters = string;

// @public (undocumented)
export type AnCopyrightClaims = AnAnagolayCopyrightClaim[];

// @public (undocumented)
export type AnCreatorId = AnCharacters;

// @public (undocumented)
export interface AnExpiration {
    // (undocumented)
    expirationType: AnExpirationType;
    // (undocumented)
    value: string;
}

// @public (undocumented)
export enum AnExpirationType {
    // (undocumented)
    DAYS = 3,
    // (undocumented)
    FOREVER = 0,
    // (undocumented)
    MINUTES = 4,
    // (undocumented)
    MONTHS = 2,
    // (undocumented)
    SECONDS = 5,
    // (undocumented)
    YEARS = 1
}

// @public (undocumented)
export type AnFileBuffer = Buffer;

// @public (undocumented)
export enum AnForWhat {
    // (undocumented)
    'CAMERA' = 2,
    // (undocumented)
    'FLOWCONTROL' = 7,
    // (undocumented)
    'GENERIC' = 0,
    // (undocumented)
    'LENS' = 3,
    // (undocumented)
    'PHOTO' = 1,
    // (undocumented)
    'SMARTPHONE' = 4,
    // (undocumented)
    'SYS' = 6,
    // (undocumented)
    'USER' = 5
}

// @public
export type AnGenericId = string;

// @public (undocumented)
export type AnGenericIds = AnGenericId[];

// @public (undocumented)
export interface AnImageData {
    // (undocumented)
    data: Uint8Array | Uint8ClampedArray | number[];
    // (undocumented)
    height: number;
    // (undocumented)
    width: number;
}

// Warning: (ae-forgotten-export) The symbol "ExpandedTags" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export interface AnImageMetadata extends ExpandedTags {
    // (undocumented)
    file: ExifFile;
}

// @public
export interface AnInputParamsDefinition {
    // (undocumented)
    data: output;
    // (undocumented)
    decoded: outputDecoded;
}

// @public
export interface AnInputParamsImplementation {
    // (undocumented)
    data: outputImplementation;
    // (undocumented)
    decode: () => outputDecodedImplementation;
}

// @public (undocumented)
export type AnNull = null;

// @public (undocumented)
export interface AnOperation {
    // (undocumented)
    data: AnOperationData;
    // (undocumented)
    extra?: AnOperationExtra;
    // (undocumented)
    id: AnGenericId;
}

// @public (undocumented)
export interface AnOperationArtifactStructure {
    // (undocumented)
    artifactType: AnOperationArtifactType;
    // (undocumented)
    fileExtension: AnCharacters;
    // (undocumented)
    ipfsCid: AnGenericId;
}

// @public (undocumented)
export interface AnOperationArtifactType {
    // (undocumented)
    Docs: undefined;
    // (undocumented)
    Git: undefined;
    // (undocumented)
    Wasm: AnWasmArtifactSubType;
}

// @public (undocumented)
export interface AnOperationData {
    // (undocumented)
    config: Map<AnCharacters, AnCharacters[]>;
    // (undocumented)
    description: AnCharacters;
    // (undocumented)
    groups: AnForWhat[];
    // (undocumented)
    inputs: AnTypeName[];
    // (undocumented)
    license: AnCharacters;
    // (undocumented)
    name: AnCharacters;
    // (undocumented)
    nostd: AnBoolean;
    // (undocumented)
    output: AnTypeName;
    // (undocumented)
    repository: AnCharacters;
}

// @public (undocumented)
export type AnOperationExtra = Record<string, any>;

// @public (undocumented)
export type AnOperationId = AnGenericId;

// @public (undocumented)
export interface AnOperationRecord {
    // (undocumented)
    accountId: AnAccountId;
    // (undocumented)
    blockNumber: AnBlockNumber;
    // (undocumented)
    record: AnOperation;
}

// @public (undocumented)
export interface AnOperationVersion {
    // (undocumented)
    data: AnOperationVersionData;
    // (undocumented)
    extra?: AnAnagolayVersionExtra;
    // (undocumented)
    id: AnVersionId;
}

// @public
export interface AnOperationVersionData {
    // (undocumented)
    artifacts: AnOperationArtifactStructure[];
    // (undocumented)
    entityId?: AnOperationId;
    // (undocumented)
    parentId?: AnVersionId;
}

// @public (undocumented)
export interface AnOperationVersionExtra {
    // (undocumented)
    createdAt: number;
}

// @public (undocumented)
export interface AnOperationVersionRecord {
    // (undocumented)
    accountId: AnAccountId;
    // (undocumented)
    blockNumber: AnBlockNumber;
    // (undocumented)
    record: AnOperationVersion;
}

// @public (undocumented)
export interface AnOperationVersionReference {
    // (undocumented)
    config: Map<AnCharacters, AnCharacters>;
    // (undocumented)
    versionId: AnVersionId;
}

// @public (undocumented)
export interface AnOperationWithStorage {
    // (undocumented)
    operationInfo: AnOperationRecord;
    // (undocumented)
    storageKey: string;
}

// @public (undocumented)
export type AnOwnershipClaims = AnAnagolayOwnershipClaim[];

// @public (undocumented)
export interface AnPhashInfo {
    // (undocumented)
    pHash: string;
    // (undocumented)
    proofId: AnGenericId;
}

// @public (undocumented)
export interface AnProof {
    // (undocumented)
    data: AnProofData;
    // (undocumented)
    id: AnGenericId;
}

// @public (undocumented)
export interface AnProofData {
    // (undocumented)
    creator: AnCreatorId;
    // (undocumented)
    groups: AnForWhat[];
    // Warning: (ae-forgotten-export) The symbol "AnProofParams" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    params: AnProofParams_2[];
    // (undocumented)
    prevId: AnGenericId;
    // (undocumented)
    ruleId: AnGenericId;
}

// @public (undocumented)
export interface AnProofInfo {
    // (undocumented)
    accountId: AnAccountId;
    // (undocumented)
    blockNumber: AnBlockNumber;
    // (undocumented)
    proof: AnProof;
}

// @public (undocumented)
export type AnProofParams = AnProofParams_2;

// @public (undocumented)
export interface AnProofWithStorage {
    // (undocumented)
    proofInfo: AnProofInfo;
    // (undocumented)
    storageKey: string;
}

// @public (undocumented)
export interface AnProportion {
    // (undocumented)
    name: string;
    // (undocumented)
    sign: string;
    // (undocumented)
    value: string;
}

// @public
export type AnSigner = any;

// @public (undocumented)
export interface AnSplitParams {
    // (undocumented)
    data: AnInputParamsImplementation[];
    // (undocumented)
    opName: AnString;
}

// @public (undocumented)
export type AnStatement = AnAnagolayStatement;

// @public (undocumented)
export interface AnStatementData {
    // (undocumented)
    claim: AnAnagolayClaim;
    // (undocumented)
    signatures: AnAnagolaySignatures;
}

// @public (undocumented)
export interface AnStatementInfo {
    // (undocumented)
    accountId: AnAccountId;
    // (undocumented)
    blockNumber: AnBlockNumber;
    // (undocumented)
    statement: AnAnagolayStatement;
}

// @public (undocumented)
export type AnStatements = AnAnagolayStatement[];

// @public (undocumented)
export interface AnStatementWithStorage {
    // (undocumented)
    statementInfo: AnStatementInfo;
    // (undocumented)
    storageKey: string;
}

// @public (undocumented)
export type AnString = string;

// @public (undocumented)
export type AnTypeName = string;

// @public (undocumented)
export interface AnValidity {
    // (undocumented)
    from: string;
    // (undocumented)
    until: string;
}

// @public (undocumented)
export type AnVersionId = AnGenericId;

// @public (undocumented)
export enum AnWasmArtifactSubType {
    // (undocumented)
    'Cjs' = 0,
    // (undocumented)
    'Esm' = 1,
    // (undocumented)
    'Wasm' = 2,
    // (undocumented)
    'Web' = 3
}

// @public (undocumented)
export interface AnWorkflow {
    // (undocumented)
    data: AnWorkflowData;
    // (undocumented)
    extra?: AnWorkflowExtra;
    // (undocumented)
    id: AnWorkflowId;
}

// @public (undocumented)
export interface AnWorkflowArtifactStructure {
    // (undocumented)
    artifactType: AnWorkflowArtifactType;
    // (undocumented)
    fileExtension: AnCharacters;
    // (undocumented)
    ipfsCid: AnGenericId;
}

// @public (undocumented)
export interface AnWorkflowArtifactType {
    // (undocumented)
    Docs: undefined;
    // (undocumented)
    Git: undefined;
    // (undocumented)
    Wasm: AnWasmArtifactSubType;
}

// @public (undocumented)
export interface AnWorkflowData {
    // (undocumented)
    creators: AnCreatorId[];
    // (undocumented)
    description: AnCharacters;
    // (undocumented)
    groups: AnForWhat[];
    // (undocumented)
    name: AnCharacters;
    // (undocumented)
    segments: AnWorkflowSegment[];
}

// @public (undocumented)
export type AnWorkflowExtra = Record<string, any>;

// @public (undocumented)
export type AnWorkflowId = AnGenericId;

// @public (undocumented)
export interface AnWorkflowRecord {
    // (undocumented)
    accountId: AnAccountId;
    // (undocumented)
    blockNumber: AnBlockNumber;
    // (undocumented)
    record: AnWorkflow;
}

// @public (undocumented)
export interface AnWorkflowSegment {
    // (undocumented)
    inputs: number[];
    // (undocumented)
    sequence: AnOperationVersionReference[];
}

// @public (undocumented)
export interface AnWorkflowVersion {
    // (undocumented)
    data: AnWorkflowVersionData;
    // (undocumented)
    extra?: AnAnagolayVersionExtra;
    // (undocumented)
    id: AnVersionId;
}

// @public (undocumented)
export interface AnWorkflowVersionData {
    // (undocumented)
    artifacts: AnWorkflowArtifactStructure[];
    // (undocumented)
    entityId?: AnWorkflowId;
    // (undocumented)
    parentId?: AnVersionId;
}

// @public (undocumented)
export interface AnWorkflowVersionExtra {
    // (undocumented)
    createdAt: number;
}

// @public (undocumented)
export interface AnWorkflowVersionRecord {
    // (undocumented)
    accountId: AnAccountId;
    // (undocumented)
    blockNumber: AnBlockNumber;
    // (undocumented)
    record: AnWorkflowVersion;
}

// @public
export interface ArtifactId extends GenericId {
}

// @public
export interface Characters extends Bytes {
}

// @public
export interface CreatorId extends Characters {
}

// @public (undocumented)
export interface ExifFile {
    // (undocumented)
    'Bits Per Sample': {
        value: number;
        description: string;
    };
    // (undocumented)
    'Color Components': {
        value: number;
        description: string;
    };
    // (undocumented)
    'Image Height': {
        value: number;
        description: string;
    };
    // (undocumented)
    'Image Width': {
        value: number;
        description: string;
    };
    // (undocumented)
    Subsampling: {
        value: number[];
        description: string;
    };
}

// @public
export interface Expiration extends Struct {
    // (undocumented)
    readonly expirationType: ExpirationType;
    // (undocumented)
    readonly value: Bytes;
}

// @public
export interface ExpirationType extends Enum {
    // (undocumented)
    readonly isDays: boolean;
    // (undocumented)
    readonly isForever: boolean;
    // (undocumented)
    readonly isMinutes: boolean;
    // (undocumented)
    readonly isMonths: boolean;
    // (undocumented)
    readonly isSeconds: boolean;
    // (undocumented)
    readonly isYears: boolean;
    // (undocumented)
    readonly type: 'Forever' | 'Years' | 'Months' | 'Days' | 'Minutes' | 'Seconds';
}

// @public
export interface ForWhat extends Enum {
    // (undocumented)
    readonly isCamera: boolean;
    // (undocumented)
    readonly isFlowcontrol: boolean;
    // (undocumented)
    readonly isGeneric: boolean;
    // (undocumented)
    readonly isLens: boolean;
    // (undocumented)
    readonly isPhoto: boolean;
    // (undocumented)
    readonly isSmartphone: boolean;
    // (undocumented)
    readonly isSys: boolean;
    // (undocumented)
    readonly isUser: boolean;
    // (undocumented)
    readonly type: 'Generic' | 'Photo' | 'Camera' | 'Lens' | 'Smartphone' | 'User' | 'Sys' | 'Flowcontrol';
}

// @public
export interface GenericId extends Bytes {
}

// @public
export interface Operation extends Struct {
    // (undocumented)
    readonly data: OperationData;
    // (undocumented)
    readonly extra: Option_2<OperationExtra>;
    // (undocumented)
    readonly id: GenericId_2;
}

// @public
export interface OperationArtifactStructure extends Struct {
    // (undocumented)
    readonly artifactType: OperationArtifactType;
    // (undocumented)
    readonly fileExtension: Characters_2;
    // (undocumented)
    readonly ipfsCid: GenericId_2;
}

// @public
export interface OperationArtifactType extends Enum {
    // (undocumented)
    readonly asWasm: WasmArtifactSubType_2;
    // (undocumented)
    readonly isDocs: boolean;
    // (undocumented)
    readonly isGit: boolean;
    // (undocumented)
    readonly isWasm: boolean;
    // (undocumented)
    readonly type: 'Docs' | 'Git' | 'Wasm';
}

// @public
export interface OperationData extends Struct {
    // (undocumented)
    readonly config: BTreeMap<Characters_2, Vec<Characters_2>>;
    // (undocumented)
    readonly description: Characters_2;
    // (undocumented)
    readonly groups: Vec<ForWhat_2>;
    // (undocumented)
    readonly inputs: Vec<TypeName>;
    // (undocumented)
    readonly license: Characters_2;
    // (undocumented)
    readonly name: Characters_2;
    // (undocumented)
    readonly nostd: bool;
    // (undocumented)
    readonly output: TypeName;
    // (undocumented)
    readonly repository: Characters_2;
}

// @public
export interface OperationExtra extends Struct {
}

// @public
export interface OperationId extends GenericId {
}

// @public
export interface OperationRecord extends Struct {
    // (undocumented)
    readonly accountId: AccountId;
    // (undocumented)
    readonly blockNumber: BlockNumber;
    // (undocumented)
    readonly record: Operation;
}

// @public (undocumented)
export const operations: {
    types: {
        [x: string]: string | Record<string, string> | CodecClass<Codec> | {
            _enum: string[] | Record<string, number> | Record<string, string | null>;
        } | {
            _set: Record<string, number>;
        };
    };
};

// @public
export interface OperationVersion extends Struct {
    // (undocumented)
    readonly data: OperationVersionData;
    // (undocumented)
    readonly extra: Option_2<AnagolayVersionExtra_2>;
    // (undocumented)
    readonly id: VersionId_2;
}

// @public
export interface OperationVersionData extends Struct {
    // (undocumented)
    readonly artifacts: Vec<OperationArtifactStructure>;
    // (undocumented)
    readonly entityId: Option_2<OperationId_2>;
    // (undocumented)
    readonly parentId: Option_2<VersionId_2>;
}

// @public
export interface OperationVersionRecord extends Struct {
    // (undocumented)
    readonly accountId: AccountId;
    // (undocumented)
    readonly blockNumber: BlockNumber;
    // (undocumented)
    readonly record: OperationVersion;
}

// @public
export interface OperationVersionReference extends Struct {
    // (undocumented)
    readonly config: BTreeMap<Characters_2, Characters_2>;
    // (undocumented)
    readonly versionId: VersionId_2;
}

// @public (undocumented)
export type output = 'AnByteArray' | 'AnProofParams[]' | 'AnBoolean' | 'AnString' | 'AnAny' | 'StringOrBuffer';

// @public (undocumented)
export type outputDecoded = 'AnBuffer' | 'AnByteArray' | 'AnFileBuffer' | 'AnStatement' | 'AnStatements' | 'AnProofParams' | 'AnProofParams[]' | 'AnString' | 'AnAny' | 'AnImageMetadata' | 'AnSplitParams' | 'AnGenericId' | 'AnBoolean' | 'AnNull' | 'AnImageData' | 'AnOwnershipClaims' | 'AnCopyrightClaims' | 'AnGenericIds' | 'AnAnagolayClaim[]' | 'AnAnagolaySignatures[]' | 'AnSigner' | '[AnAnagolayClaim[],AnAnagolaySignatures[]]' | 'StringOrBuffer' | 'SaveStatementReturn[]';

// @public (undocumented)
export type outputDecodedImplementation = AnBuffer | AnByteArray | AnFileBuffer | AnStatement | AnStatements | AnProofParams | AnBoolean | AnString | AnAny | AnImageMetadata | AnImageData;

// @public (undocumented)
export type outputImplementation = AnByteArray | AnBoolean | AnProofParams[] | AnString;

// @public (undocumented)
export type PHANTOM_ANAGOLAYSUPPORT = 'anagolaySupport';

// @public (undocumented)
export type PHANTOM_OPERATIONS = 'operations';

// @public (undocumented)
export type PHANTOM_POE = 'poe';

// @public (undocumented)
export type PHANTOM_STATEMENTS = 'statements';

// @public (undocumented)
export type PHANTOM_WORKFLOWS = 'workflows';

// @public
export interface PhashInfo extends Struct {
    // (undocumented)
    readonly pHash: Bytes;
    // (undocumented)
    readonly proofId: GenericId_2;
}

// @public (undocumented)
export const poe: {
    types: {
        [x: string]: string | Record<string, string> | CodecClass<Codec> | {
            _enum: string[] | Record<string, number> | Record<string, string | null>;
        } | {
            _set: Record<string, number>;
        };
    };
};

// @public
export interface Proof extends Struct {
    // (undocumented)
    readonly data: ProofData;
    // (undocumented)
    readonly extra: Option_2<ProofExtra>;
    // (undocumented)
    readonly id: GenericId_2;
}

// @public
export interface ProofData extends Struct {
    // (undocumented)
    readonly creator: CreatorId_2;
    // (undocumented)
    readonly groups: Vec<ForWhat_2>;
    // (undocumented)
    readonly params: Vec<ProofParams>;
    // (undocumented)
    readonly prevId: GenericId_2;
    // (undocumented)
    readonly ruleId: GenericId_2;
}

// @public
export interface ProofExtra extends Struct {
}

// @public
export interface ProofParams extends Struct {
    // (undocumented)
    readonly k: Bytes;
    // (undocumented)
    readonly v: Bytes;
}

// @public
export interface ProofRecord extends Struct {
    // (undocumented)
    readonly accountId: AccountId;
    // (undocumented)
    readonly blockNumber: BlockNumber;
    // (undocumented)
    readonly record: Proof;
}

// @public
export interface Proportion extends Struct {
    // (undocumented)
    readonly name: Bytes;
    // (undocumented)
    readonly sign: Bytes;
    // (undocumented)
    readonly value: Bytes;
}

// @public (undocumented)
export interface SaveStatementReturn {
    // (undocumented)
    poe_id: AnGenericId;
    // (undocumented)
    statement_id: AnGenericId;
}

// @public
export interface StatementData extends Struct {
    // (undocumented)
    readonly claim: AnagolayClaim;
    // (undocumented)
    readonly signatures: AnagolaySignatures;
}

// @public
export interface StatementExtra extends Struct {
}

// @public (undocumented)
export const statements: {
    types: {
        [x: string]: string | Record<string, string> | CodecClass<Codec> | {
            _enum: string[] | Record<string, number> | Record<string, string | null>;
        } | {
            _set: Record<string, number>;
        };
    };
};

// @public
export type StringOrBuffer = AnString | AnBuffer;

// @public
export interface TypeName extends Bytes {
}

// @public
export interface Validity extends Struct {
    // (undocumented)
    readonly from: Bytes;
    // (undocumented)
    readonly until: Bytes;
}

// @public
export interface VersionId extends GenericId {
}

// @public
export interface WasmArtifactSubType extends Enum {
    // (undocumented)
    readonly isCjs: boolean;
    // (undocumented)
    readonly isEsm: boolean;
    // (undocumented)
    readonly isWasm: boolean;
    // (undocumented)
    readonly isWeb: boolean;
    // (undocumented)
    readonly type: 'Cjs' | 'Esm' | 'Wasm' | 'Web';
}

// @public
export interface Workflow extends Struct {
    // (undocumented)
    readonly data: WorkflowData;
    // (undocumented)
    readonly extra: Option_2<WorkflowExtra>;
    // (undocumented)
    readonly id: WorkflowId_2;
}

// @public
export interface WorkflowArtifactStructure extends Struct {
    // (undocumented)
    readonly artifactType: WorkflowArtifactType;
    // (undocumented)
    readonly fileExtension: Characters_2;
    // (undocumented)
    readonly ipfsCid: GenericId_2;
}

// @public
export interface WorkflowArtifactType extends Enum {
    // (undocumented)
    readonly asWasm: WasmArtifactSubType_2;
    // (undocumented)
    readonly isDocs: boolean;
    // (undocumented)
    readonly isGit: boolean;
    // (undocumented)
    readonly isWasm: boolean;
    // (undocumented)
    readonly type: 'Docs' | 'Git' | 'Wasm';
}

// @public
export interface WorkflowData extends Struct {
    // (undocumented)
    readonly creators: Vec<CreatorId_2>;
    // (undocumented)
    readonly description: Characters_2;
    // (undocumented)
    readonly groups: Vec<ForWhat_2>;
    // (undocumented)
    readonly name: Characters_2;
    // (undocumented)
    readonly segments: Vec<WorkflowSegment>;
}

// @public
export interface WorkflowExtra extends Struct {
}

// @public
export interface WorkflowId extends GenericId {
}

// @public
export interface WorkflowRecord extends Struct {
    // (undocumented)
    readonly accountId: AccountId;
    // (undocumented)
    readonly blockNumber: BlockNumber;
    // (undocumented)
    readonly record: Workflow;
}

// @public (undocumented)
export const workflows: {
    types: {
        [x: string]: string | Record<string, string> | CodecClass<Codec> | {
            _enum: string[] | Record<string, number> | Record<string, string | null>;
        } | {
            _set: Record<string, number>;
        };
    };
};

// @public
export interface WorkflowSegment extends Struct {
    // (undocumented)
    readonly inputs: Bytes;
    // (undocumented)
    readonly sequence: Vec<OperationVersionReference>;
}

// @public
export interface WorkflowVersion extends Struct {
    // (undocumented)
    readonly data: WorkflowVersionData;
    // (undocumented)
    readonly extra: Option_2<AnagolayVersionExtra_2>;
    // (undocumented)
    readonly id: VersionId_2;
}

// @public
export interface WorkflowVersionData extends Struct {
    // (undocumented)
    readonly artifacts: Vec<WorkflowArtifactStructure>;
    // (undocumented)
    readonly entityId: Option_2<WorkflowId_2>;
    // (undocumented)
    readonly parentId: Option_2<VersionId_2>;
}

// @public
export interface WorkflowVersionRecord extends Struct {
    // (undocumented)
    readonly accountId: AccountId;
    // (undocumented)
    readonly blockNumber: BlockNumber;
    // (undocumented)
    readonly record: WorkflowVersion;
}

// (No @packageDocumentation comment for this package)

```