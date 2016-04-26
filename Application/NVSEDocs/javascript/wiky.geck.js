/*	This work is licensed under Creative Commons GNU LGPL License.

	License: http://creativecommons.org/licenses/LGPL/2.1/

	Author:  Stefan Goessner/2005-06
	Web:     http://goessner.net/

   credits: http://www.regular-expressions.info/examplesprogrammer.html
*/
Wiky.rules.lang.geck = [
	"Wiky.rules.code",
	{ rex:/"([^"\%\xB6]*(\%.[^"\%\xB6]*)*)"/g, tmplt:function($0,$1){return Wiky.store("<span class=\"str\">\""+$1+"\"</span>");}}, // string delimited by '"' with '%"' allowed ..
	{ rex:/\s;(.*?)(?:\xB6|$)/gm, tmplt:function($0,$1){return Wiky.store("<span class\=\"cmt\">;"+$1+"</span>\xB6");}}, // single line comment
	{ rex:/([\]\[\-+\|*!%<>=\{\}:\)\(]+)|(&#34;|&#47;|&#61;)+/g, tmplt:"<span class=\"op\">$1</span>"}, // operators
	{ rex:/\b(Begin|else|elseif|End|endif|float|Function|GameMode|if|int|long|MenuMode|OnActivate|OnActorEquip|OnActorUnequip|OnAdd|OnAlarm|OnAlarmVictim|OnClose|OnCombatEnd|OnDeath|OnDestructionStageChange|OnDrop|OnEquip|OnFire|OnGrab|OnHit|OnHitWith|OnKnockout|OnLoad|OnMagicEffectHit|OnMurder|OnNPCActivate|OnOpen|OnPackageChange|OnPackageDone|OnPackageEnd|OnPackageStart|OnRelease|OnReset|OnSell|OnStartCombat|OnTrigger|OnTriggerActor|OnTriggerEnter|OnTriggerLeave|OnTriggerMob|OnUnequip|ref|reference|SayToDone|scn|ScriptEffectFinish|ScriptEffectStart|ScriptEffectUpdate|ScriptName|short)\b/gi, tmplt:"<span class=\"blk\">$1</span>" }, // blocks
	{ rex:/\b(Abs|Activate|AddAchievement|AddCard|AddCardToPlayer|AddCreatureToLeveledList|AddFlames|AddFormToFormList|AddItem|AddItemHealthPercent|AddItemToLeveledList|AddNote|AN|AddNPCToLeveledList|AddPerk|AddReputation|AddReputationExact|AddScriptPackage|AddSPECIALPoints|AddSpell|AddTagSkills|AddToFaction|Addfac|AddTopic|AdvancePCLevel|AdvLevel|AdvancePCSkill|AdvSkill|AgeRace|ApplyImageSpaceModifier|imod|AttachAshPile|AutoDisplayObjectives|Autosave|CanHaveFlames|Cast|CastImmediateOnSelf|CIOS|ChallengeLocked|ClearActorsFactionsPlayerEnemyFlag|ClearDestruction|ClearFactionPlayerEnemyFlag|ClearNoActivationSound|ClearOwnership|ClearScreenSplatter|CompleteAllObjectives|CompleteQuest|Cos|Craft|CreateDetectionEvent|CSize|CSSP|DamageActorValue|DamageAV|DamageObject|do|DetonatePlacedExplosives|DisAA|Disable|DisableAllActors|DisableAllMines|DisableLinkedPathPoints|DisableNavMesh|DisablePlayerControls|Dispel|DispelAllSpells|DPE|Drop|DropMe|DumpMasterFileSeekData|DuplicateAllItems|DuplicateNPCStats|Enable|EnableFast|EnableFastTravel|EnableLinkedPathPoints|EnableLoadingMenu|EnableNavMesh|EnablePlayerControls|EnterTrigger|EquipItem|EquipObject|EssentialDeathReload|EvaluatePackage|evp|EvaluateSpellConditions|esc|Exists|ExitGame|exit|FadeSFX|FSFX|FireWeapon|Flee|ForceActiveQuest|ForceActorValue|ForceAV|ForceFlee|ForceRadioStationUpdate|FRSU|ForceSave|ForceTakeCover|TakeCover|ForceTerminalBack|ForceWeather|fw|FOV|FriendDispositionBoost|FunctionUnused16|FunctionUnused19|unused|FunctionUnused20|GetActionRef|getAR|GetActorAggroRadiusViolated|GetActorCrimePlayerEnemy|GetActorFactionPlayerEnemy|GetActorsInHigh|GetActorValue|GetAV|GetAlarmed|GetAmountSoldStolen|GetAngle|GetAnimAction|GetArmorRating|GetArmorRatingUpperBody|GetAttacked|GetBarterGold|GetBaseActorValue|GetBaseAV|GetBroadcastState|GetButtonPressed|GetCannibal|GetCauseofDeath|GetChallengeCompleted|GetClassDefaultMatch|GetClothingValue|GetCombatTarget|GetConcussed|GetContainer|GetContainerInventoryCount|GetCrime|GetCrimeKnown|GetCurrentAIPackage|GetCurrentAIProcedure|GetCurrentTime|GetCurrentWeatherPercent|getweatherpct|GetDayOfWeek|GetDead|GetDeadCount|GetDefaultOpen|GetDestroyed|GetDestructionStage|GetDetected|GetDetectionLevel|GetDialogueEmotion|GetDialogueEmotionValue|GetDisabled|GetDisease|GetDisposition|GetDistance|GetEquipped|GetFactionCombatReaction|GetFactionRank|GetFactionRankDifference|GetFactionReaction|GetFactionRelation|GetFatigue|GetFatiguePercentage|GetForceHitReaction|GetForceRun|GetForceSneak|GetFriendHit|GetFurnitureMarkerID|GetGameSetting|GetGS|GetGlobalValue|GetGold|GetGroupMemberCount|GetGroupTargetCount|GetHasNote|GetN|GetHeadingAngle|GetHealthPercentage|GetHitLocation|GetIdleDoneOnce|GetIgnoreCrime|GetIgnoreFriendlyHits|gifh|GetInCell|GetInCellParam|GetInFaction|GetInSameCell|GetInWorldspace|GetInZone|GetIsAlerted|GetIsAlignment|GetIsClass|GetIsClassDefault|GetIsCreature|GetIsCreatureType|GetIsCurrentPackage|GetIsCurrentWeather|getweather|GetIsFormType|GetIsGhost|GetIsID|GetIsLockBroken|GetIsObjectType|GetIsPlayableRace|GetIsRace|GetIsReference|GetIsSex|GetIsUsedItem|GetIsUsedItemEquipType|GetIsUsedItemType|GetIsVoiceType|GetItemCount|GetKillingBlowLimb|GetKnockedState|GetLastHitCritical|GetLastPlayerAction|GetLevel|GetLineOfSight|GetLOS|GetLinkedRef|GetLocked|GetLockLevel|GetMajorCrimeCount|GetMapMarkerVisible|GetMinorCrimeCount|GetNoRumors|GetObjectiveCompleted|GetObjectiveDisplayed|GetOffersServicesNow|GetOpenState|GetOwnerLastTarget|GetPackageTarget|GetParentRef|GetPCEnemyofFaction|GetPCExpelled|GetPCFactionAttack|GetPCFactionMurder|GetPCInFaction|GetPCIsClass|GetPCIsRace|GetPCIsSex|GetPCMiscStat|GetPCMS|GetPCSleepHours|GetPermanentActorValue|GetPermAV|GetPersuasionNumber|GetPlantedExplosive|GetPlayerControlsDisabled|GetPlayerGrabbedRef|GetPlayerHasLastRiddenHorse|GetPlayerName|GetPlayerTeammate|GetPlayerTeammateCount|GetPos|GetQC|GetQR|GetQuestCompleted|GetQuestRunning|GetQuestVariable|GetRadiationLevel|GetRandomPercent|GetReputation|GetReputationPct|GetReputationThreshold|GetRestrained|GetSandman|GetScale|GetScriptVariable|GetSecondsPassed|GetSelf|this|GetShouldAttack|GetSitting|GetSleeping|GetSpellUsageNum|GetStage|GetStageDone|GetStartingAngle|GetStartingPos|GetTalkedToPC|GetTalkedToPCParam|GetThreatRatio|GetTimeDead|GetTotalPersuasionNumber|GetTrespassWarningLevel|GetUnconscious|GetUsedItemActivate|GetUsedItemLevel|GetVampire|GetVATSBackAreaFree|GetVATSBackTargetVisible|GetVATSFrontAreaFree|GetVATSFrontTargetVisible|GetVATSLeftAreaFree|GetVATSLeftTargetVisible|GetVATSMode|GetVATSRightAreaFree|GetVATSRightTargetVisible|GetVatsTargetHeight|GetVATSValue|GetWalk|GetWalkSpeed|GetWeaponAnimType|GetWeaponHealthPerc|GetWindSpeed|GetXPForNextLevel|GOLT|HasBeenEaten|HasFlames|HasFriendDisposition|HasLoaded3D|HasMagicEffect|HasPerk|HUDSH|IgnoreCrime|IncrementScriptedChallenge|IsActionRef|IsActor|IsActorAVictim|IsActorDetected|IsActorEvil|IsActorsAIOff|IsActorTalkingThroughActivator|IsActorUsingATorch|IsAnimPlaying|IsCellOwner|IsChild|IsCloudy|IsCombatTarget|IsContinuingPackagePCNear|IsCurrentFurnitureObj|IsCurrentFurnitureRef|IsEssential|IsFacingUp|IsGoreDisabled|IsGreetingPlayer|IsGuard|IsHardcore|IsHorseStolen|IsIdlePlaying|IsImageSpaceActive|IsInCombat|IsInCriticalStage|IsInDangerousWater|IsInInterior|IsInList|IsInMyOwnedCell|IsKiller|IsKillerObject|IsLastIdlePlayed|IsLastIdlePlaying|IsLeftUp|IsLimbGone|IsLoadingMenuEnabled|IsMoving|IsOwner|IsPC1stPerson|pc1st|IsPCAMurderer|IsPCSleeping|IsPlayerActionActive|IsPlayerGrabbedRef|IsPlayerInRegion|IsPlayerMovingIntoNewSpace|IsPlayersLastRiddenHorse|IsPlayerTagSkill|IsPleasant|IsPS3|IsQuestItem|IsRaining|IsRidingHorse|IsRunning|IsShieldOut|IsSneaking|IsSnowing|IsSpellTarget|IsSwimming|IsTalking|IsTalkingActivatorActor|IsTimePassing|IsTorchOut|IsTrespassing|IsTurning|IsWaiting|IsWaterObject|IsWeaponInList|IsWeaponOut|IsWeaponSkillType|IsWin32|IsXBox|Kill|KillActor|KillAll|KillAllActors|KillQuestUpdates|KQU|Lock|Log|Look|LoopGroup|MarkForDelete|MatchFaceGeometry|MatchRace|ModActorValue|ModAV|ModAmountSoldStolen|ModBarterGold|ModDisposition|ModFactionRank|ModFactionReaction|ModPCA|ModPCAttribute|ModPCMiscStat|ModPCMS|ModPCS|ModPCSkill|ModScale|ModWeaponHealthPerc|MoveTo|MoveToFade|MoveToMarker|MoveToMarkerWithFade|ObjectUnderReticle|OpenTeammateContainer|PickIdle|PipBoyRadio|prad|PipBoyRadioOff|PlaceAtMe|PlaceAtMeHealthPercent|PlaceLeveledActorAtMe|PlayBink|PlayGroup|PlayIdle|PlayMagicEffectVisuals|PME|PlayMagicShaderVisuals|PMS|PlayMusic|PlaySound|PlaySound3D|Pow|PreloadMagicEffect|PurgeCellBuffers|pcb|PushActorAway|ReleaseWeatherOverride|rwo|RemapWaterType|RemoveAllItems|RemoveAllTypedItems|RemoveFac|RemoveFlames|RemoveFromAllFactions|RemoveFromFaction|RemoveImageSpaceModifier|rimod|RemoveItem|RemoveMe|RemoveMerchantContainer|RemoveNote|RN|RemovePerk|RemoveRecurringFromChallenge|RemoveReputation|RemoveReputationExact|RemoveScriptPackage|RemoveSpell|Reset3DState|ResetAI|ResetFallDamageTimer|ResetHealth|ResetInterior|ResetInventory|ResetPipboyManager|ResetQuest|ResetXP|RestoreActorValue|RestoreAV|Resurrect|ResurrectActor|Return|RewardKarma|RewardXP|Rotate|RRFC|SAM|SameFaction|SameFactionAsPC|SameRace|SameRaceAsPC|SameSex|SameSexAsPC|SAR|Say|SayTo|SBJM|SBJMP|SBM|SCGM|SCGMOD|SCGMP|SCI|ScriptEffectElapsedSeconds|SelectPlayerSpell|spspell|SendAssaultAlarm|SendTrespassAlarm|set|SetActorAlpha|SAA|SetActorFullName|SetActorRefraction|SetActorsAI|SetActorValue|SetAV|SetAlert|SetAllReachable|SetAllVisible|SetAlly|SetAngle|SetAtStart|SetAudioMultiThreading|SetBarterGold|SetBroadcastState|SetCameraFOV|SetCasinoCheatLevel|SetCasinoWinningsLevel|SetCellFullName|SetCellImageSpace|SetCellOwnership|SetCellPublicFlag|setpublic|SetClass|SetCombatStyle|setcs|SetCriticalStage|SetDefaultOpen|SetDestroyed|SetDisp|SetDisposition|SetEnemy|SetEssential|SetFactionRank|SetFactionReaction|SetForceRun|SetForceSneak|SetGhost|SetGlobalTimeMultiplier|sgtm|SetHardcore|SetIgnoreFriendlyHits|sifh|SetImageSpace|SetInChargen|SetItemValue|SetLastExtDoorActivated|SetLevel|SetLocationSpecificLoadScreensOnly|SetMerchantContainer|SetMinimalUse|SetNoActivationSound|SetNoAvoidance|SetNoRumors|SetNPCRadio|snr|SetObjectiveCompleted|SetObjectiveDisplayed|SetOpenState|SetOwnership|SetPackDuration|SPDur|SetPCCanUsePowerArmor|SetPCEnemyofFaction|SetPCExpelled|SetPCFactionAttack|SetPCFactionMurder|SetPCSleepHours|SetPCToddler|SetPCYoung|SetPlayerTagSkill|SetPlayerTeammate|SetPos|SetQuestDelay|SetQuestObject|SetReputation|SetRestrained|SetRigidBodyMass|SetRumble|SetScale|SetSceneIsComplex|SetScreenSplatterFade|SetSecExp|SetSecuritronExpression|SetShowQuestItems|SetSize|SetSPECIALPoints|SetStage|SetTagSkills|SetTalkingActivatorActor|SetUnconscious|SetVATSTarget|SetWeaponHealthPerc|SetWeather|sw|SetZoneRespawns|SexChange|SHMG|ShowAllMapMarkers|tmm|ShowBarberMenu|ShowBarterMenu|ShowBlackJackMenu|ShowBlackJackMenuParams|ShowCaravanMenu|ShowChargenMenu|ShowChargenMenuModValues|ShowChargenMenuParams|ShowClassMenu|ShowComputersInterface|ShowDialogSubtitles|ShowHackingMiniGame|ShowLockpickMenu|slpm|ShowLockpickMenuDebug|slpmd|ShowLoveTesterMenu|ShowLoveTesterMenuParams|ShowMap|ShowMessage|ShowNameMenu|ShowPlasticSurgeonMenu|ShowQuestStages|SQS|ShowRaceMenu|ShowRecipeMenu|ShowRepairMenu|srm|ShowRouletteMenu|ShowRouletteMenuParams|ShowSlotMachineMenu|ShowSlotMachineMenuParams|ShowSPECIALBookMenu|ssbm|ShowSPECIALBookMenuParams|ssbmp|ShowSpellMaking|ShowSurgeryMenu|ssmg|ShowTraitMenu|ShowTraitSelectMenu|ShowTutorialMenu|ShowViewerStrings|svs|ShowWarning|Sin|SkipAnim|SLTM|SLTMP|SME|SMS|Sqrt|SRMP|SSLM|SSLMP|SSPF|StartCannibal|StartCombat|StartConversation|StartMasterFileSeekData|StartMisterSandMan|StartQuest|StartRadioConversation|StopCombat|StopCombatAlarmOnActor|SCAOnActor|StopLook|StopMagicEffectVisuals|StopMagicShaderVisuals|StopQuest|StopWaiting|StreamMusic|STSM|SwapTexture|SwapTextureOnRef|Tan|THS|TMB|to|ToggleActorsAI|ToggleMotionBlur|TraitMenu|TrapUpdate|TriggerHitShader|TriggerHUDShudder|TriggerLODApocalypse|TriggerScreenBlood|tsb|UnequipItem|UnEquipObject|UnLock|UnlockChallenge|UnusedFunction|UnusedFunction1|UnusedFunction10|UnusedFunction11|UnusedFunction12|UnusedFunction13|UnusedFunction14|UnusedFunction15|UnusedFunction17|UnusedFunction18|UnusedFunction21|UnusedFunction22|UnusedFunction26|UnusedFunction27|UnusedFunction28|UnusedFunction29|UnusedFunction9|UseWeapon|Wait|WakeUpPC|WhichServiceMenu)\b/gi, tmplt:"<span class=\"vnl\">$1</span>" }, // vanilla functions
	{ rex:/\b(AddSpellNS|Ceil|CompareNames|con_CloseAllMenus|con_GetINISetting|con_LoadGame|con_QuitGame|con_RefreshINI|con_Save|con_SaveINI|con_SetCameraFOV|con_SetGameSetting|con_SetINISetting|con_SetVel|dbmode|dbprintc|dc|DebugPrint|DisableControl|DisableKey|dk|ec|ek|EnableControl|EnableKey|Exp|Floor|flr|fmod|gbo|GetAimArc|GetAltControl|GetAmmo|GetAmmoUse|GetAnimAttackMult|GetAnimJamTime|GetAnimMult|GetAnimReloadTime|GetAnimShotsPerSec|GetAP|GetArmorAR|GetArmorArmorRating|GetAttackAnim|GetAttackDamage|GetBaseHealth|GetBaseObject|GetClipSize|GetControl|GetCritDam|GetCritEffect|GetCritPerc|GetCrosshairRef|GetDamage|GetDbMode|GetDebugMode|GetEnchantment|GetEqCurHealth|GetEqObj|GetEquippedCurrentHealth|GetEquippedObject|GetEquipType|GetFireDelayMax|GetFireDelayMin|GetFireRate|GetFirstRef|GetFirstRefInCell|GetFOSEBeta|GetFOSERevision|GetFOSEVersion|GetGameLoaded|GetGameRestarted|GetHandGrip|GetHealth|GetHotkeyItem|GetIsAutomatic|GetItemValue|GetKey|GetKeyPress|GetLimbDamageMult|GetLinkedDoor|GetMaxRange|GetMinRange|GetMinSpread|GetModIndex|GetMouseButtonPress|GetNextRef|GetNumericGameSetting|GetNumericIniSetting|GetNumKeysPressed|GetNumLoadedMods|GetNumMouseButtonsPressed|GetNumProj|GetNumRefs|GetNumRefsInCell|GetObjectEffect|GetObjectType|GetOpenKey|GetParentCell|GetParentWorldspace|GetReach|GetReloadAnim|GetRepairList|GetRumbleDuration|GetRumbleLeft|GetRumbleRight|GetRumbleWavelen|GetScript|GetSightFOV|GetSightUsage|GetSourceModIndex|GetSpread|GetTeleportCell|GetType|GetUIFloat|GetValue|GetVATSChance|GetWeaponActionPoints|GetWeaponAimArc|GetWeaponAmmo|GetWeaponAmmoUse|GetWeaponAnimAttackMult|GetWeaponAnimJamTime|GetWeaponAnimMult|GetWeaponAnimReloadTime|GetWeaponAnimShotsPerSec|GetWeaponAttackAnimation|GetWeaponBaseVATSChance|GetWeaponClipRounds|GetWeaponCritChance|GetWeaponCritDamage|GetWeaponCritEffect|GetWeaponFireDelayMax|GetWeaponFireDelayMin|GetWeaponFireRate|GetWeaponHandGrip|GetWeaponHasScope|GetWeaponIsAutomatic|GetWeaponLimbDamageMult|GetWeaponMaxRange|GetWeaponMinRange|GetWeaponMinSpread|GetWeaponNumProjectiles|GetWeaponProjectile|GetWeaponReach|GetWeaponReloadAnim|GetWeaponResist|GetWeaponResistType|GetWeaponRumbleDuration|GetWeaponRumbleLeftMotor|GetWeaponRumbleRightMotor|GetWeaponRumbleWavelength|GetWeaponSightFOV|GetWeaponSightUsage|GetWeaponSkill|GetWeaponSpread|GetWeaponType|GetWeapProj|GetWeapType|GetWeight|gkp|gmbp|gnkp|Goto|gpc|gpw|grl|hk|HoldKey|IsCloned|IsClonedForm|IsControl|IsControlDisabled|IsControlPressed|IsFormValid|IsKeyDisabled|IsKeyPressed|IsModLoaded|IsPA|IsPowerArmor|IsReference|IsScripted|Label|LeftShift|ListAddForm|ListAddRef|ListAddReference|ListGetCount|ListGetFormIndex|ListGetNthForm|ListRemoveForm|ListRemoveNth|ListRemoveNthForm|ListReplaceForm|ListReplaceNth|ListReplaceNthForm|Log10|LogicalAnd|LogicalNot|LogicalOr|LogicalXor|MenuHoldKey|MenuReleaseKey|MenuTapKey|mhk|mrk|mtk|PrintActiveTile|printc|PrintToConsole|r|Rand|ReleaseKey|RemoveScript|RightShift|rk|SetAimArc|SetAltControl|SetAmmo|SetAmmoUse|SetAnimAttackMult|SetAnimMult|SetAP|SetAttackAnim|SetAttackDamage|SetBaseItemValue|SetClipSize|SetControl|SetCritDamage|SetCritEffect|SetCritPerc|SetDamage|SetDebugMode|SetEqCurHealth|SetEquippedCurrentHealth|SetHandGrip|SetHealth|SetIsAutomatic|SetIsControl|SetIsPA|SetIsPowerArmor|SetKey|SetLimbDamageMult|SetMaxRange|SetMinRange|SetMinSpread|SetName|SetNumericGameSetting|SetNumericIniSetting|SetNumProj|SetObjectHealth|SetProjectile|SetReloadAnim|SetRepairList|SetScript|SetSightFOV|SetSightUsage|SetSpread|SetUIFloat|SetUIString|SetValue|SetVATSChance|SetWeaponActionPoints|SetWeaponAimArc|SetWeaponAmmo|SetWeaponAmmoUse|SetWeaponAnimAttackMult|SetWeaponAnimMult|SetWeaponAttackAnimation|SetWeaponBaseVATSChance|SetWeaponClipRounds|SetWeaponCritChance|SetWeaponCritDamage|SetWeaponCritEffect|SetWeaponHandGrip|SetWeaponIsAutomatic|SetWeaponLimbDamageMult|SetWeaponMaxRange|SetWeaponMinRange|SetWeaponMinSpread|SetWeaponNumProjectiles|SetWeaponProjectile|SetWeaponReach|SetWeaponReloadAnim|SetWeaponSightFOV|SetWeaponSightUsage|SetWeaponSpread|SetWeaponType|SetWeight|TapControl|TapKey|tc|TempCloneForm|tk|ActorValueToString|ActorValueToStringC|AddItemHealthPercentOwner|AddItemOwnership|AddPackageAt|ar_Append|ar_BadNumericIndex|ar_BadStringIndex|ar_Construct|ar_Copy|ar_CustomSort|ar_DeepCopy|ar_Dump|ar_DumpID|ar_Erase|ar_Find|ar_First|ar_HasKey|ar_Insert|ar_InsertRange|ar_Keys|ar_Last|ar_List|ar_Map|ar_Next|ar_Null|ar_Prev|ar_Range|ar_Resize|ar_Size|ar_Sort|ar_SortAlpha|AsciiToChar|Break|BuildRef|Call|CharToAscii|ClearBit|ClearOpenKey|CompareScripts|con_SCOF|con_TCL|con_TFC|con_ToggleMenus|Continue|CopyIR|CreateTempRef|eval|ForEach|GetActorBaseFlagsHigh|GetActorBaseFlagsLow|GetAgeClass|GetArmorDT|GetArrayVariable|GetBaseForm|GetBipedIconPath|GetBipedModelPath|GetCallingScript|GetCurrentHealth|GetCurrentPackage|GetCurrentScript|GetDebugSelection|GetDialogueSpeaker|GetDialogueSubject|GetDialogueTarget|GetEquippedWeaponModFlags|GetEyes|GetFalloutDirectory|GetFirstRefForItem|GetFormIDString|GetHairColor|GetHairLength|GetIconPath|GetInventoryObject|GetKeyName|GetLocalRefIndex|GetModelPath|GetModLocalData|GetName|GetNextRefForItem|GetNPCHeight|GetNPCWeight|GetNthExplicitRef|GetNthFactionRankName|GetNthModName|GetNthPackage|GetNumExplicitRefs|GetNumItems|GetNVSEBeta|GetNVSERevision|GetNVSEVersion|GetOwner|GetOwningFactionRequiredRank|GetPackageCount|GetPackageLocation|GetPackageLocationRadius|GetPackageTargetCount|GetPaired|GetParentCellOwner|GetParentCellOwningFactionRequiredRank|GetPermanent|GetPlayerCurrentAmmo|GetPlayerCurrentAmmoRounds|GetRace|GetRaceName|GetRawFormIDString|GetRefVariable|GetRespawn|GetStringGameSetting|GetTexturePath|GetTokenRef|GetTr|GetTokenValue|GetTV|GetUIString|GetUserTime|GetVariable|GetWeaponFlags1|GetWeaponFlags2|GetWeaponItemMod|GetWeaponItemModEffect|GetWeaponItemModValue1|GetWeaponItemModValue2|GetWeaponLongBursts|HasOwnership|HasVariable|IsDigit|IsLetter|IsOwned|IsPrintable|IsPunctuation|IsRefInList|IsUpperCase|let|Loop|MessageBoxEx|MessageEx|NumToHex|PickOneOf|Print|RemoveAllPackages|RemoveMeIR|RemovePackageAt|ResetAllVariables|RunScript|SetActorBaseFlagsHigh|SetActorBaseFlagsLow|SetArmorAR|SetArmorDT|SetBipedIconPathEX|SetBipedModelPathEX|SetBit|SetCurrentHealth|SetEquippedWeaponModFlags|SetEyes|SetFunctionValue|SetHair|SetHairColor|SetHairLength|SetIconPathEX|SetModelPathEX|SetModLocalData|SetNameEx|SetNPCHeight|SetNPCWeight|SetNthFactionRankNameEX|SetNthPackage|SetOpenKey|SetOwningFactionRequiredRank|SetPackageLocationRadius|SetPackageLocationReference|SetPackageTargetCount|SetPackageTargetReference|SetPermanet|SetPlayerCurrentAmmoRounds|SetRespawn|SetStringGameSettingEX|SetTexturePath|SetTokenRef|SetTR|SetTokenValue|SetTV|SetTokenValueAndRef|SetTVR|SetUIStringEx|SetWeaponFireRate|SetWeaponFlags1|SetWeaponFlags2|SetWeaponItemModEffect|SetWeaponItemModValue1|SetWeaponItemModValue2|SetWeaponLongBursts|SetWeaponRequiredSkill|SortUIListBox|sv_Compare|sv_Construct|sv_Count|sv_Destruct|sv_Erase|sv_Find|sv_GetChar|sv_Insert|sv_Length|sv_Percentify|sv_Replace|sv_Set|sv_Split|sv_SubString|sv_ToLower|sv_ToNumeric|sv_ToUpper|TestExpr|ToLower|ToNumber|ToString|ToUpper|TypeOf|While)\b/gi, tmplt:"<span class=\"nvse\">$1</span>" }, // nvse functions
	{ rex:/\b(NX_GetVersion|NX_IsUsingSkeleton|NX_IsInList|NX_SetEVFl|NX_GetEVFl|NX_SetEVFo|NX_GetEVFo|NX_GetConversationPartner|NX_ClrEVFl|NX_ClrEVFo|NX_GetQVEFl|NX_SetEVSt|NX_GetEVSt|NX_GetEVFlAr|NX_GetEVFoAr|NX_GetEVStAr|GetModINISetting|GetModINI|SetModINISetting|SetModINI|GetMCMFloat|SetMCMFloat|SetMCMString|SetMCMFloatMass|SetMCMStringMass|SetMCMModList|GetMCMListWidth|PN_GetActorBaseFlagsLow|PN_GetConditionDamagePenalty|PN_GetExplosionDamage|PN_GetExplosionForce|PN_GetProjectileExplosion|PN_ListClear|PN_SetConditionDamagePenalty|PN_SetExplosionDamage|PN_SetExplosionForce)\b/gi, tmplt:"<span class=\"plg\">$1</span>" }, // nvse plugins
	{ rex:/\b(ActionPoints|Aggression|Agility|Assistance|Barter|BigGuns|BloodyMess|BrainCondition|CarryWeight|Chameleon|Charisma|Confidence|CritChance|DamageResist|DetectLifeRange|ElectricResist|EmpResist|Endurance|EnduranceCondition|Energy|EnergyResist|EnergyWeapons|Explosives|Fatigue|FireResist|FrostResist|Guns|HealRate|Health|IgnoreCrippledLimbs|Intelligence|InventoryWeight|Invisibility|Karma|LeftAttackCondition|LeftMobilityCondition|Lockpick|Luck|Medicine|MeleeDamage|MeleeWeapons|Mood|NightEye|Paralysis|Perception|PerceptionCondition|Player|PoisonResist|RadiationRads|RadResist|Repair|Responsibility|RightAttackCondition|RightMobilityCondition|Science|SmallGuns|Sneak|Speech|Strength|Survival|Unarmed|UnarmedDamage|Variable01|Variable02|Variable03|Variable04|Variable05|Variable06|Variable07|Variable08|Variable09|Variable10|WaterBreathing|XP)\b/gi, tmplt:"<span class=\"av\">$1</span>" }, // actor values
];
Wiky.inverse.lang.js = [
     { rex:/<span class=\"?(cmt|kwd|mbr|obj|str)\"?>|<\/span>/mgi, tmplt:"" },
     { rex:/<strong>(.*?)<\/strong>/mgi, tmplt:"[*$1*]" },
      "Wiky.inverse.code"
];