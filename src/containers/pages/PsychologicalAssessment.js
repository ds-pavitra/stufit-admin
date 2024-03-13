import React from 'react';
import { Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import { Colxx } from 'components/common/CustomBootstrap';

const PsychologicalAssessment = ({ formData, handleInputChange }) => {
  return (
    <Form className="d-flex">
      <Colxx xxs="12" md="12" className="mb-5">
        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="annoyed">
            Easily Getting Annoyed
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="annoyed"
              id="annoyedYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="annoyed"
              id="annoyedNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="appearingAngry">
            Often Appearing Angry
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="appearingAngry"
              id="appearingAngryYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="appearingAngry"
              id="appearingAngryNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="blameOnOthers">
            Putting Blame On Others
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="blameOnOthers"
              id="blameOnOthersYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="blameOnOthers"
              id="blameOnOthersNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="qAuthorities">
            Refusing To Follow Rules Or Questioning Authorities
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="qAuthorities"
              id="qAuthoritiesYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="qAuthorities"
              id="qAuthoritiesNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="temperTantrums">
            Arguing And Throwing Temper Tantrums
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="temperTantrums"
              id="temperTantrumsYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="temperTantrums"
              id="temperTantrumsNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="difficultHF">
            Having Difficulty In Handling Frustrations
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="difficultHF"
              id="difficultHFYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="difficultHF"
              id="difficultHFNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="behaviourDisorder">
            Behaviour Disorder
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="behaviourDisorder"
              id="behaviourDisorderYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="behaviourDisorder"
              id="behaviourDisorderNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="wordAccuracy">
            Spelling The Word Accurately
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="wordAccuracy"
              id="wordAccuracyYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="wordAccuracy"
              id="wordAccuracyNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="qInTest">
            Summarizing, Paraphrasing, Answering Application Problem Or Question
            In Test
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="qInTest"
              id="qInTestYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="qInTest"
              id="qInTestNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="poorMemory">
            Poor Memory
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="poorMemory"
              id="poorMemoryYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="poorMemory"
              id="poorMemoryNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="newSurrondings">
            Adjusting To New Surroundings
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="newSurrondings"
              id="newSurrondingsFriendly"
              label="Friendly"
              checked={formData.na_dizziness === 'Friendly'}
              value="Friendly"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="newSurrondings"
              id="newSurrondingsNotFriendly"
              label="Not Friendly"
              checked={formData.na_dizziness === 'Yes'}
              value="Not Friendly"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="unableToSitStill">
            Being Unable To Sit Still, Especially In Calm Or Quiet Surrounding
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="unableToSitStill"
              id="unableToSitStillYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="unableToSitStill"
              id="unableToSitStillNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="fidgetting">
            Constantly Fidgetting
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="fidgetting"
              id="fidgettingYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="fidgetting"
              id="fidgettingNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="unableToConcentrate">
            Being Unable To Concentrate On Task
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="unableToConcentrate"
              id="unableToConcentrateYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="unableToConcentrate"
              id="unableToConcentrateNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="excessivePMovements">
            Excessive Physical Movements
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="excessivePMovements"
              id="excessivePMovementsSymptomatic"
              label="Symptomatic"
              checked={formData.na_dizziness === 'Symptomatic'}
              value="Symptomatic"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="excessivePMovements"
              id="excessivePMovementsNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="excessiveTalking">
            Excessive Talking
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="excessiveTalking"
              id="excessiveTalkingYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="excessiveTalking"
              id="excessiveTalkingNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="unableToWait">
            Being Unable To Wait Untill Their Turn
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="unableToWait"
              id="unableToWaitYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="unableToWait"
              id="unableToWaitNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="acingWithoutThinking">
            Acting Without Thinking
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="acingWithoutThinking"
              id="acingWithoutThinkingYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="acingWithoutThinking"
              id="acingWithoutThinkingNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth" for="interruptionConversion">
            Interruption Conversion
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="interruptionConversion"
              id="interruptionConversionYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="interruptionConversion"
              id="interruptionConversionNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Attention Deficit Hyperactivity Disorder
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="ADH"
              id="ADHYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="ADH"
              id="ADHNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Low Self Esteem</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="LSE"
              id="LSEYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="LSE"
              id="LSENo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Irritable Actions</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="irritableActions"
              id="irritableActionsYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="irritableActions"
              id="irritableActionsNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Sudden Anger</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="suddenAnger"
              id="suddenAngerYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="suddenAnger"
              id="suddenAngerNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Frequent Absence</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="frequentAbsence"
              id="frequentAbsenceYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="frequentAbsence"
              id="frequentAbsenceNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Thought Of Suicide</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="suicideThoughts"
              id="suicideThoughtsYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="suicideThoughts"
              id="suicideThoughtsNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Reckless Behaviour</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="recklessBehaviour"
              id="recklessBehaviourSymptomatic"
              label="Symptomatic"
              checked={formData.na_dizziness === 'Symptomatic'}
              value="Symptomatic"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="recklessBehaviour"
              id="recklessBehaviourNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Crying Frequently</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="cryingFrequently"
              id="cryingFrequentlyYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="cryingFrequently"
              id="cryingFrequentlyNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Depression</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="depression"
              id="depressionSymptomatic"
              label="Symptomatic"
              checked={formData.na_dizziness === 'Symptomatic'}
              value="Symptomatic"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="depression"
              id="depressionNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Contant Feel on Edge And Uneasy
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="uneasy"
              id="uneasyYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="uneasy"
              id="uneasyNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Social Changes</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="socialChanges"
              id="socialChangesYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="socialChanges"
              id="socialChangesNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Physical Changes</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="physicalChanges"
              id="physicalChangesYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="physicalChanges"
              id="physicalChangesNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Sleep Disturbance</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="sleepDisturbance"
              id="sleepDisturbanceYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="sleepDisturbance"
              id="sleepDisturbanceNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Poor School Performance</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="poorSchoolPreformance"
              id="poorSchoolPreformanceYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="poorSchoolPreformance"
              id="poorSchoolPreformanceNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Panic Attack</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="panicAttack"
              id="panicAttackYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="panicAttack"
              id="panicAttackNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Anxiety</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="anxiety"
              id="anxietyYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="anxiety"
              id="anxietyNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Sudden Change In Attitude Performance
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="changeInAttitude"
              id="changeInAttitudeYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="changeInAttitude"
              id="changeInAttitudeNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Mood Affected By Thought About Appearance
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="moodAffected"
              id="moodAffectedYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="moodAffected"
              id="moodAffectedNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Obesity</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="obesityPsyc"
              id="obesityYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="obesityPsyc"
              id="obesityNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Constantly Compares Self To Others
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="compareSelfToOthers"
              id="compareSelfToOthersYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="compareSelfToOthers"
              id="compareSelfToOthersNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Refer To Self As Fat, Gross, Ugly
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="referSelfFGU"
              id="referSelfFGUYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="referSelfFGU"
              id="referSelfFGUNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Strive To Create A Perfect Image
          </Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="perfectImg"
              id="perfectImgYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="perfectImg"
              id="perfectImgNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Incessant Talk About Food</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="incessantTalkAboutFood"
              id="incessantTalkAboutFoodYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="incessantTalkAboutFood"
              id="incessantTalkAboutFoodNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Emotions Are Flat/Absent</Label>
          <div className="d-flex cursor-pointer">
            <CustomInput
              type="radio"
              name="flatEmotions"
              id="flatEmotionsYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="flatEmotions"
              id="flatEmotionsNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Intolerance For Imperfection In Academics, Eating, Social Life, etc.
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="intoleranceInLife"
              id="intoleranceInLifeYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="intoleranceInLife"
              id="intoleranceInLifeNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Spend Increasing Amount Of Time Alone
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="spendTimeAlone"
              id="spendTimeAloneYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="spendTimeAlone"
              id="spendTimeAloneNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Pulls Back From Friend</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="pullsBackFriend"
              id="pullsBackFriendYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="pullsBackFriend"
              id="pullsBackFriendNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Is Obsessed With Maintaining Unhealthy Eating Habits To Enhance
            Performance In Sports, Dance, Acting Or Modeling
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="isObsessed"
              id="isObsessedYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="isObsessed"
              id="isObsessedNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Reluctant To Ask For Help</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="askForHelp"
              id="askForHelpYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="askForHelp"
              id="askForHelpNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Sudden Weight Loss / Weight Gain Or Fluctuation In Short Time
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="weightChanges"
              id="weightChangesYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="weightChanges"
              id="weightChangesNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Complaints Of Abdominal Pain
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="abdominalPain"
              id="abdominalPainYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="abdominalPain"
              id="abdominalPainNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Feeling Full Or Bloated</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="fullOrBloated"
              id="fullOrBloatedYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="fullOrBloated"
              id="fullOrBloatedNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Dark Circles Under The Eyes
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="darkCircles"
              id="darkCirclesYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="darkCircles"
              id="darkCirclesNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Make Frequent Bathroom Trips
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="bathroomTrips"
              id="bathroomTripsYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="bathroomTrips"
              id="bathroomTripsNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Any School Phobia</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="schoolPhobia"
              id="schoolPhobiaYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="schoolPhobia"
              id="schoolPhobiaNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Mobile Addiction</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="mobileAddiction"
              id="mobileAddictionYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="mobileAddiction"
              id="mobileAddictionNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Short Term Memory Loss</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="memoryLoss"
              id="memoryLossYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="memoryLoss"
              id="memoryLossNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Substance Abuse</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="substanceAbuse"
              id="substanceAbuseYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="substanceAbuse"
              id="substanceAbuseNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="substanceAbuse"
              id="substanceAbuseNotApplicable"
              label="Not Applicable"
              checked={formData.na_dizziness === 'Not Applicable'}
              value="Not Applicable"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Delay In Menstruation Cycle
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="delayInMCycle"
              id="delayInMCycleYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="delayInMCycle"
              id="delayInMCycleNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="delayInMCycle"
              id="delayInMCycleNotApplicable"
              label="Not Applicable"
              checked={formData.na_dizziness === 'Not Applicable'}
              value="Not Applicable"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Irregular Period</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="irregularPeriod"
              id="irregularPeriodYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="irregularPeriod"
              id="irregularPeriodNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="irregularPeriod"
              id="irregularPeriodNotApplicable"
              label="Not Applicable"
              checked={formData.na_dizziness === 'Not Applicable'}
              value="Not Applicable"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Pain During Menstruation</Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="painDuringM"
              id="painDuringMYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="painDuringM"
              id="painDuringMNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="painDuringM"
              id="painDuringMNotApplicable"
              label="Not Applicable"
              checked={formData.na_dizziness === 'Not Applicable'}
              value="Not Applicable"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">
            Pain Or Burning Sensation While Urination
          </Label>
          <div className="d-flex cursor-pointer ">
            <CustomInput
              type="radio"
              name="painWhileUrination"
              id="painWhileUrinationYes"
              label="Yes"
              checked={formData.na_dizziness === 'Yes'}
              value="Yes"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
            <CustomInput
              className="ml-2"
              type="radio"
              name="painWhileUrination"
              id="painWhileUrinationNo"
              label="No"
              checked={formData.na_dizziness === 'No'}
              value="No"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Advice </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Advice"
            name="advicePhysicalAssessment"
            value={formData.advicePhysicalAssessment}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group tooltip-right-bottom d-flex align-items-center">
          <Label className="custom-formWidth">Remark </Label>
          <Input
            className="mb-2 c-w-500"
            placeholder="Remark"
            name="remarkPhysicalAssessment"
            value={formData.remarkPhysicalAssessment}
            onChange={(e) => handleInputChange(e.target.name, e.target.value)}
          />
        </FormGroup>
      </Colxx>
    </Form>
  );
};

export default PsychologicalAssessment;
