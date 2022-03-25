/**
 * MAINTAIN THIS FILE FOR THE TYPESCRIPT NATIVE TYPE CHECKING
 * THE POLKADOT API TYPES ARE IN THE definitions.ts file
 */
export type AnGenericId = string;
export type AnCharacters = string;
export type AnCreatorId = AnGenericId;
export type AnArtifactId = AnGenericId;
export type AnOperationId = AnGenericId;
export type AnWorkflowId = AnGenericId;
export type AnVersionId = AnGenericId;

export type AnAccountId = string;
export type AnBlockNumber = number;

export enum AnForWhat {
  'GENERIC',
  'PHOTO',
  'CAMERA',
  'LENS',
  'SMARTPHONE',
  'USER',
  'SYS',
  'FLOWCONTROL',
}

export enum AnWasmArtifactSubType {
  'CJS',
  'WASM',
  'ESM',
  'WEB',
}

export enum AnDocsArtifactSubType {
  'RUSTDOC',
}

export type AnAnagolayVersionExtra = {
  createdAt: number;
};
