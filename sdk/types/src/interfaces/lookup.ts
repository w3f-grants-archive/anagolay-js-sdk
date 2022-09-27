// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData',
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128',
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64',
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>',
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null',
    },
  },
  /**
   * Lookup16: frame_system::EventRecord<anagolay_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>',
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
    },
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays',
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory'],
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No'],
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
    },
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]',
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported'],
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero'],
  },
  /**
   * Lookup26: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer'],
  },
  /**
   * Lookup27: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null',
    },
  },
  /**
   * Lookup30: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup31: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup32: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
    },
  },
  /**
   * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved'],
  },
  /**
   * Lookup34: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128',
      },
    },
  },
  /**
   * Lookup35: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
    },
  },
  /**
   * Lookup39: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
    },
  },
  /**
   * Lookup40: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
    },
  },
  /**
   * Lookup41: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32',
      },
    },
  },
  /**
   * Lookup42: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallLookupFailed: {
        task: '(u32,u32)',
        id: 'Option<Bytes>',
        error: 'FrameSupportScheduleLookupError',
      },
    },
  },
  /**
   * Lookup45: frame_support::traits::schedule::LookupError
   **/
  FrameSupportScheduleLookupError: {
    _enum: ['Unknown', 'BadFormat'],
  },
  /**
   * Lookup46: pallet_uniques::pallet::Event<T, I>
   **/
  PalletUniquesEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'AccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        collection: 'u32',
        item: 'u32',
      },
      Thawed: {
        collection: 'u32',
        item: 'u32',
      },
      CollectionFrozen: {
        collection: 'u32',
      },
      CollectionThawed: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'AccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      ApprovedTransfer: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ItemStatusChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      MetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      OwnershipAcceptanceChanged: {
        who: 'AccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
    },
  },
  /**
   * Lookup53: operations::pallet::Event<T>
   **/
  OperationsEvent: {
    _enum: {
      OperationCreated: '(AccountId32,Bytes)',
      BadRequestError: '(AccountId32,Bytes)',
    },
  },
  /**
   * Lookup58: poe::pallet::Event<T>
   **/
  PoeEvent: {
    _enum: {
      ProofCreated: '(AccountId32,Bytes)',
      PhashCreated: '(AccountId32,H256)',
      BadRequestError: '(AccountId32,Bytes)',
    },
  },
  /**
   * Lookup60: statements::pallet::Event<T>
   **/
  StatementsEvent: {
    _enum: {
      CopyrightCreated: '(AccountId32,Bytes)',
      OwnershipCreated: '(AccountId32,Bytes)',
      StatementRevoked: '(AccountId32,Bytes)',
      BadRequestError: '(AccountId32,Bytes)',
    },
  },
  /**
   * Lookup62: workflows::pallet::Event<T>
   **/
  WorkflowsEvent: {
    _enum: {
      WorkflowCreated: '(AccountId32,Bytes)',
      BadRequestError: '(AccountId32,Bytes)',
    },
  },
  /**
   * Lookup64: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null',
    },
  },
  /**
   * Lookup67: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text',
  },
  /**
   * Lookup70: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
    },
  },
  /**
   * Lookup75: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass',
  },
  /**
   * Lookup76: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass',
  },
  /**
   * Lookup77: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>',
  },
  /**
   * Lookup79: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32',
  },
  /**
   * Lookup80: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32',
  },
  /**
   * Lookup81: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64',
  },
  /**
   * Lookup82: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8',
  },
  /**
   * Lookup88: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: [
      'InvalidSpecName',
      'SpecVersionNeedsToIncrease',
      'FailedToExtractRuntimeVersion',
      'NonDefaultComposite',
      'NonZeroRefCount',
      'CallFiltered',
    ],
  },
  /**
   * Lookup90: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>',
      },
    },
  },
  /**
   * Lookup93: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup94: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup97: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
    },
  },
  /**
   * Lookup98: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>',
  },
  /**
   * Lookup100: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32',
      },
    },
  },
  /**
   * Lookup101: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation',
  },
  /**
   * Lookup102: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit',
    },
  },
  /**
   * Lookup103: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
  },
  /**
   * Lookup104: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32',
  },
  /**
   * Lookup105: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup106: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup109: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
  },
  /**
   * Lookup110: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32',
  },
  /**
   * Lookup112: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup113: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: [
      'PauseFailed',
      'ResumeFailed',
      'ChangePending',
      'TooSoon',
      'InvalidKeyOwnershipProof',
      'InvalidEquivocationProof',
      'DuplicateOffenceReport',
    ],
  },
  /**
   * Lookup115: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons',
  },
  /**
   * Lookup116: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All'],
  },
  /**
   * Lookup119: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128',
  },
  /**
   * Lookup121: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0'],
  },
  /**
   * Lookup122: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
    },
  },
  /**
   * Lookup127: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: [
      'VestingBalance',
      'LiquidityRestrictions',
      'InsufficientBalance',
      'ExistentialDeposit',
      'KeepAlive',
      'ExistingVestingSchedule',
      'DeadAccount',
      'TooManyReserves',
    ],
  },
  /**
   * Lookup129: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2'],
  },
  /**
   * Lookup130: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call',
      },
    },
  },
  /**
   * Lookup132: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
    },
  },
  /**
   * Lookup133: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'AnagolayRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
    },
  },
  /**
   * Lookup135: anagolay_runtime::OriginCaller
   **/
  AnagolayRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      Void: 'SpCoreVoid',
    },
  },
  /**
   * Lookup136: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null',
    },
  },
  /**
   * Lookup137: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32',
      },
    },
  },
  /**
   * Lookup138: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32',
  },
  /**
   * Lookup139: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: 'Bytes',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      cancel_named: {
        id: 'Bytes',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
      schedule_named_after: {
        id: 'Bytes',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'FrameSupportScheduleMaybeHashed',
      },
    },
  },
  /**
   * Lookup141: frame_support::traits::schedule::MaybeHashed<anagolay_runtime::Call, primitive_types::H256>
   **/
  FrameSupportScheduleMaybeHashed: {
    _enum: {
      Value: 'Call',
      Hash: 'H256',
    },
  },
  /**
   * Lookup142: pallet_uniques::pallet::Call<T, I>
   **/
  PalletUniquesCall: {
    _enum: {
      create: {
        collection: 'u32',
        admin: 'MultiAddress',
      },
      force_create: {
        collection: 'u32',
        owner: 'MultiAddress',
        freeHolding: 'bool',
      },
      destroy: {
        collection: 'u32',
        witness: 'PalletUniquesDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        owner: 'MultiAddress',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
        checkOwner: 'Option<MultiAddress>',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'MultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      freeze: {
        collection: 'u32',
        item: 'u32',
      },
      thaw: {
        collection: 'u32',
        item: 'u32',
      },
      freeze_collection: {
        collection: 'u32',
      },
      thaw_collection: {
        collection: 'u32',
      },
      transfer_ownership: {
        collection: 'u32',
        owner: 'MultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        maybeCheckDelegate: 'Option<MultiAddress>',
      },
      force_item_status: {
        collection: 'u32',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        freeHolding: 'bool',
        isFrozen: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
    },
  },
  /**
   * Lookup143: pallet_uniques::types::DestroyWitness
   **/
  PalletUniquesDestroyWitness: {
    items: 'Compact<u32>',
    itemMetadatas: 'Compact<u32>',
    attributes: 'Compact<u32>',
  },
  /**
   * Lookup145: operations::pallet::Call<T>
   **/
  OperationsCall: {
    _enum: {
      create: {
        operationData: 'OperationsOperationData',
        versionData: 'OperationsOperationVersionData',
      },
      version_approve: {
        operationId: 'Bytes',
      },
    },
  },
  /**
   * Lookup146: operations::types::OperationData
   **/
  OperationsOperationData: {
    name: 'Bytes',
    description: 'Bytes',
    inputs: 'Vec<Bytes>',
    config: 'AnagolaySupportMapsSerializableMaybeSerializableBoundedBTreeMapBoundedVec',
    groups: 'Vec<AnagolaySupportForWhat>',
    output: 'Bytes',
    repository: 'Bytes',
    license: 'Bytes',
    features: 'Vec<Bytes>',
  },
  /**
   * Lookup149: anagolay_support::types::maps::serializable::MaybeSerializableBoundedBTreeMap<anagolay_support::types::characters::Characters, sp_runtime::bounded::bounded_vec::BoundedVec<anagolay_support::types::characters::Characters, S>, anagolay_support::constants::MaxOperationConfigEntriesGet>
   **/
  AnagolaySupportMapsSerializableMaybeSerializableBoundedBTreeMapBoundedVec: 'BTreeMap<Bytes, Vec<Bytes>>',
  /**
   * Lookup151: anagolay_support::constants::MaxOperationConfigEntriesGet
   **/
  AnagolaySupportConstantsMaxOperationConfigEntriesGet: 'Null',
  /**
   * Lookup157: anagolay_support::types::ForWhat
   **/
  AnagolaySupportForWhat: {
    _enum: ['GENERIC', 'PHOTO', 'CAMERA', 'LENS', 'SMARTPHONE', 'USER', 'SYS', 'FLOWCONTROL'],
  },
  /**
   * Lookup160: operations::types::OperationVersionData
   **/
  OperationsOperationVersionData: {
    entityId: 'Option<Bytes>',
    parentId: 'Option<Bytes>',
    artifacts: 'Vec<AnagolaySupportAnagolayArtifactStructureOperationArtifactType>',
  },
  /**
   * Lookup165: anagolay_support::types::AnagolayArtifactStructure<operations::types::OperationArtifactType>
   **/
  AnagolaySupportAnagolayArtifactStructureOperationArtifactType: {
    artifactType: 'OperationsOperationArtifactType',
    fileExtension: 'Bytes',
    ipfsCid: 'Bytes',
  },
  /**
   * Lookup166: operations::types::OperationArtifactType
   **/
  OperationsOperationArtifactType: {
    _enum: {
      Docs: 'Null',
      Git: 'Null',
      Wasm: 'AnagolaySupportWasmArtifactSubType',
    },
  },
  /**
   * Lookup167: anagolay_support::types::WasmArtifactSubType
   **/
  AnagolaySupportWasmArtifactSubType: {
    _enum: ['Cjs', 'Esm', 'Wasm', 'Web'],
  },
  /**
   * Lookup170: poe::pallet::Call<T>
   **/
  PoeCall: {
    _enum: {
      create_proof: {
        proofData: 'PoeProofData',
      },
      save_phash: {
        phashInfo: 'PoePhashInfo',
      },
    },
  },
  /**
   * Lookup171: poe::types::ProofData
   **/
  PoeProofData: {
    workflowId: 'Bytes',
    prevId: 'Bytes',
    creator: 'Bytes',
    groups: 'Vec<AnagolaySupportForWhat>',
    params: 'Vec<PoeProofParams>',
  },
  /**
   * Lookup173: poe::types::ProofParams
   **/
  PoeProofParams: {
    k: 'Bytes',
    v: 'Bytes',
  },
  /**
   * Lookup176: poe::types::PhashInfo
   **/
  PoePhashInfo: {
    pHash: 'Bytes',
    proofId: 'Bytes',
  },
  /**
   * Lookup178: statements::pallet::Call<T>
   **/
  StatementsCall: {
    _enum: {
      create_copyright: {
        statementData: 'StatementsStatementData',
      },
      create_ownership: {
        statementData: 'StatementsStatementData',
      },
      revoke: {
        statementId: 'Bytes',
      },
    },
  },
  /**
   * Lookup179: statements::types::StatementData
   **/
  StatementsStatementData: {
    signatures: 'StatementsSignatures',
    claim: 'StatementsClaim',
  },
  /**
   * Lookup180: statements::types::Signatures
   **/
  StatementsSignatures: {
    holder: 'StatementsSignature',
    issuer: 'StatementsSignature',
  },
  /**
   * Lookup181: statements::types::Signature
   **/
  StatementsSignature: {
    sigKey: 'Bytes',
    sig: 'Bytes',
    cid: 'Bytes',
  },
  /**
   * Lookup184: statements::types::Claim
   **/
  StatementsClaim: {
    prevId: 'Option<Bytes>',
    poeId: 'Bytes',
    workflowId: 'Bytes',
    proportion: 'StatementsProportion',
    subjectId: 'Bytes',
    holder: 'Bytes',
    issuer: 'Bytes',
    claimType: 'StatementsClaimType',
    valid: 'StatementsValidity',
    expiration: 'StatementsExpiration',
    onExpiration: 'Bytes',
  },
  /**
   * Lookup186: statements::types::Proportion
   **/
  StatementsProportion: {
    sign: 'Bytes',
    name: 'Bytes',
    value: 'Bytes',
  },
  /**
   * Lookup187: statements::types::ClaimType
   **/
  StatementsClaimType: {
    _enum: ['Copyright', 'Ownership'],
  },
  /**
   * Lookup188: statements::types::Validity
   **/
  StatementsValidity: {
    from: 'Bytes',
    until: 'Bytes',
  },
  /**
   * Lookup189: statements::types::Expiration
   **/
  StatementsExpiration: {
    expirationType: 'StatementsExpirationType',
    value: 'Bytes',
  },
  /**
   * Lookup190: statements::types::ExpirationType
   **/
  StatementsExpirationType: {
    _enum: ['Forever', 'Years', 'Months', 'Days', 'Minutes', 'Seconds'],
  },
  /**
   * Lookup191: workflows::pallet::Call<T>
   **/
  WorkflowsCall: {
    _enum: {
      create: {
        workflowData: 'WorkflowsWorkflowData',
        versionData: 'WorkflowsWorkflowVersionData',
      },
    },
  },
  /**
   * Lookup192: workflows::types::WorkflowData
   **/
  WorkflowsWorkflowData: {
    name: 'Bytes',
    creators: 'Vec<Bytes>',
    description: 'Bytes',
    groups: 'Vec<AnagolaySupportForWhat>',
    segments: 'Vec<WorkflowsWorkflowSegment>',
  },
  /**
   * Lookup195: workflows::types::WorkflowSegment
   **/
  WorkflowsWorkflowSegment: {
    inputs: 'Vec<i8>',
    sequence: 'Vec<WorkflowsOperationVersionReference>',
  },
  /**
   * Lookup200: workflows::types::OperationVersionReference
   **/
  WorkflowsOperationVersionReference: {
    versionId: 'Bytes',
    config: 'AnagolaySupportMapsSerializableMaybeSerializableBoundedBTreeMapCharacters',
  },
  /**
   * Lookup201: anagolay_support::types::maps::serializable::MaybeSerializableBoundedBTreeMap<anagolay_support::types::characters::Characters, anagolay_support::types::characters::Characters, anagolay_support::constants::MaxOperationConfigEntriesGet>
   **/
  AnagolaySupportMapsSerializableMaybeSerializableBoundedBTreeMapCharacters: 'BTreeMap<Bytes, Bytes>',
  /**
   * Lookup208: workflows::types::WorkflowVersionData
   **/
  WorkflowsWorkflowVersionData: {
    entityId: 'Option<Bytes>',
    parentId: 'Option<Bytes>',
    artifacts: 'Vec<AnagolaySupportAnagolayArtifactStructureWorkflowArtifactType>',
  },
  /**
   * Lookup213: anagolay_support::types::AnagolayArtifactStructure<workflows::types::WorkflowArtifactType>
   **/
  AnagolaySupportAnagolayArtifactStructureWorkflowArtifactType: {
    artifactType: 'WorkflowsWorkflowArtifactType',
    fileExtension: 'Bytes',
    ipfsCid: 'Bytes',
  },
  /**
   * Lookup214: workflows::types::WorkflowArtifactType
   **/
  WorkflowsWorkflowArtifactType: {
    _enum: {
      Docs: 'Null',
      Git: 'Null',
      Wasm: 'AnagolaySupportWasmArtifactSubType',
    },
  },
  /**
   * Lookup216: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo'],
  },
  /**
   * Lookup217: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128',
  },
  /**
   * Lookup221: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup222: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: [
      'InsufficientProposersBalance',
      'InvalidIndex',
      'TooManyApprovals',
      'InsufficientPermission',
      'ProposalNotApproved',
    ],
  },
  /**
   * Lookup223: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls'],
  },
  /**
   * Lookup226: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1'],
  },
  /**
   * Lookup227: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: [
      'NotVesting',
      'AtMaxVestingSchedules',
      'AmountLow',
      'ScheduleIndexOutOfBounds',
      'InvalidScheduleParams',
    ],
  },
  /**
   * Lookup230: pallet_scheduler::ScheduledV3<frame_support::traits::schedule::MaybeHashed<anagolay_runtime::Call, primitive_types::H256>, BlockNumber, anagolay_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduledV3: {
    maybeId: 'Option<Bytes>',
    priority: 'u8',
    call: 'FrameSupportScheduleMaybeHashed',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'AnagolayRuntimeOriginCaller',
  },
  /**
   * Lookup231: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange'],
  },
  /**
   * Lookup232: pallet_uniques::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesCollectionDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    totalDeposit: 'u128',
    freeHolding: 'bool',
    items: 'u32',
    itemMetadatas: 'u32',
    attributes: 'u32',
    isFrozen: 'bool',
  },
  /**
   * Lookup235: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesItemDetails: {
    owner: 'AccountId32',
    approved: 'Option<AccountId32>',
    isFrozen: 'bool',
    deposit: 'u128',
  },
  /**
   * Lookup236: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool',
  },
  /**
   * Lookup237: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesItemMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool',
  },
  /**
   * Lookup240: pallet_uniques::pallet::Error<T, I>
   **/
  PalletUniquesError: {
    _enum: [
      'NoPermission',
      'UnknownCollection',
      'AlreadyExists',
      'WrongOwner',
      'BadWitness',
      'InUse',
      'Frozen',
      'WrongDelegate',
      'NoDelegate',
      'Unapproved',
      'Unaccepted',
      'Locked',
      'MaxSupplyReached',
      'MaxSupplyAlreadySet',
      'MaxSupplyTooSmall',
    ],
  },
  /**
   * Lookup241: anagolay_support::pallet::Error<T>
   **/
  AnagolaySupportError: {
    _enum: ['MaxArtifactsLimitReached'],
  },
  /**
   * Lookup243: operations::types::OperationRecord<T>
   **/
  OperationsOperationRecord: {
    record: 'OperationsOperation',
    accountId: 'AccountId32',
    blockNumber: 'u32',
  },
  /**
   * Lookup244: operations::types::Operation
   **/
  OperationsOperation: {
    id: 'Bytes',
    data: 'OperationsOperationData',
    extra: 'Option<OperationsOperationExtra>',
  },
  /**
   * Lookup246: operations::types::OperationExtra
   **/
  OperationsOperationExtra: 'Null',
  /**
   * Lookup249: operations::types::OperationVersionRecord<T>
   **/
  OperationsOperationVersionRecord: {
    record: 'OperationsOperationVersion',
    accountId: 'AccountId32',
    blockNumber: 'u32',
  },
  /**
   * Lookup250: operations::types::OperationVersion
   **/
  OperationsOperationVersion: {
    id: 'Bytes',
    data: 'OperationsOperationVersionData',
    extra: 'Option<OperationsOperationVersionExtra>',
  },
  /**
   * Lookup252: operations::types::OperationVersionExtra
   **/
  OperationsOperationVersionExtra: {
    createdAt: 'u64',
  },
  /**
   * Lookup253: operations::pallet::Error<T>
   **/
  OperationsError: {
    _enum: [
      'OperationAlreadyExists',
      'OperationVersionPackageAlreadyExists',
      'OperationAlreadyInitialized',
      'BadRequest',
      'MaxArtifactsLimitReached',
      'MaxVersionsPerOperationLimitReached',
    ],
  },
  /**
   * Lookup255: poe::types::ProofRecord<T>
   **/
  PoeProofRecord: {
    record: 'PoeProof',
    accountId: 'AccountId32',
    blockNumber: 'u32',
  },
  /**
   * Lookup256: poe::types::Proof
   **/
  PoeProof: {
    id: 'Bytes',
    data: 'PoeProofData',
    extra: 'Option<PoeProofExtra>',
  },
  /**
   * Lookup258: poe::types::ProofExtra
   **/
  PoeProofExtra: 'Null',
  /**
   * Lookup260: poe::pallet::Error<T>
   **/
  PoeError: {
    _enum: [
      'ProofAlreadyClaimed',
      'NoSuchProof',
      'NoSuchWorkflow',
      'ProofWorkflowTypeMismatch',
      'PHashAndProofIdComboAlreadyExist',
      'BadRequest',
    ],
  },
  /**
   * Lookup262: statements::types::StatementRecord<T>
   **/
  StatementsStatementRecord: {
    record: 'StatementsStatement',
    accountId: 'AccountId32',
    blockNumber: 'u32',
  },
  /**
   * Lookup263: statements::types::Statement
   **/
  StatementsStatement: {
    id: 'Bytes',
    data: 'StatementsStatementData',
    extra: 'Option<StatementsStatementExtra>',
  },
  /**
   * Lookup265: statements::types::StatementExtra
   **/
  StatementsStatementExtra: 'Null',
  /**
   * Lookup268: statements::pallet::Error<T>
   **/
  StatementsError: {
    _enum: [
      'WrongClaimType',
      'ProofHasStatement',
      'NoSuchStatement',
      'StatementHasChildStatement',
      'CreatingChildStatementNotSupported',
      'BadRequest',
      'MaxStatementsPerProofLimitReached',
    ],
  },
  /**
   * Lookup270: workflows::types::WorkflowRecord<T>
   **/
  WorkflowsWorkflowRecord: {
    record: 'WorkflowsWorkflow',
    accountId: 'AccountId32',
    blockNumber: 'u32',
  },
  /**
   * Lookup271: workflows::types::Workflow
   **/
  WorkflowsWorkflow: {
    id: 'Bytes',
    data: 'WorkflowsWorkflowData',
    extra: 'Option<WorkflowsWorkflowExtra>',
  },
  /**
   * Lookup273: workflows::types::WorkflowExtra
   **/
  WorkflowsWorkflowExtra: 'Null',
  /**
   * Lookup276: workflows::types::WorkflowVersionRecord<T>
   **/
  WorkflowsWorkflowVersionRecord: {
    record: 'WorkflowsWorkflowVersion',
    accountId: 'AccountId32',
    blockNumber: 'u32',
  },
  /**
   * Lookup277: workflows::types::WorkflowVersion
   **/
  WorkflowsWorkflowVersion: {
    id: 'Bytes',
    data: 'WorkflowsWorkflowVersionData',
    extra: 'Option<WorkflowsWorkflowVersionExtra>',
  },
  /**
   * Lookup279: workflows::types::WorkflowVersionExtra
   **/
  WorkflowsWorkflowVersionExtra: {
    createdAt: 'u64',
  },
  /**
   * Lookup280: workflows::pallet::Error<T>
   **/
  WorkflowsError: {
    _enum: [
      'WorkflowAlreadyExists',
      'WorkflowVersionPackageAlreadyExists',
      'WorkflowAlreadyInitialized',
      'BadRequest',
      'MaxArtifactsLimitReached',
      'MaxVersionsPerWorkflowLimitReached',
    ],
  },
  /**
   * Lookup282: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature',
    },
  },
  /**
   * Lookup283: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup284: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup287: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup288: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup289: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup290: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup293: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup294: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup295: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup296: anagolay_runtime::Runtime
   **/
  AnagolayRuntimeRuntime: 'Null',
};
