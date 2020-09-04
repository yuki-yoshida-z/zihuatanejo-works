<template>
  <div class="text-field-unit">
    <template v-if="elementType === 'text'">
      <div v-show="editMode" class="text-field-unit__input-block">
        <v-text-field
          single-line
          outlined
          color="#315def"
          background-color="#fff"
          :id="name"
          :label="placeholder"
          v-model="inputValue"
          :error-messages="errorMsg"
          @blur="onChange()"
        ></v-text-field>
      </div>
      <div v-show="!editMode" class="text-field-unit__display-block is-text">
        <div :class="['text-field-unit__text-block', addClassForNw]">
          <v-icon dense @click="toEditMode">mdi-pencil</v-icon>
          <p class="text-field-unit__text is-text">{{ inputValue }}</p>
        </div>
      </div>
    </template>
    <template v-else>
      <div v-show="editMode" class="text-field-unit__input-block">
        <v-textarea
          single-line
          outlined
          full-width
          auto-grow
          color="#315def"
          background-color="#fff"
          :id="name"
          :label="placeholder"
          v-model="inputValue"
          :error-messages="errorMsg"
          @blur="onChange()"
        ></v-textarea>
      </div>
      <div v-show="!editMode" class="text-field-unit__display-block is-textarea">
        <p :class="['text-field-unit__text', 'is-textarea', addClassForNw ]"><v-icon dense @click="toEditMode">mdi-pencil</v-icon>{{ inputValue }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  props: {
    elementType: String,
    displayName: String,
    name: String,
    elemClass: String,
    placeholder: String,
    validationNames: Object
  },

  data(){
    return {
      editMode: true,
      inputValue: '',
      valid: true,
      confirmed: false,
    }
  },

  validations(){
    return {
      inputValue: this.setValidations
    }
  },

  computed: {
    errorMsg(){
      const errors = []
      if (!this.$v.inputValue.$dirty) return errors
      this.$v.inputValue.required !== undefined && !this.$v.inputValue.required && errors.push(this.displayName+ 'を入力してください')
      this.$v.inputValue.maxLength !== undefined && !this.$v.inputValue.maxLength && errors.push(this.displayName+ 'は' + (this.$v.inputValue.$params.maxLength.max + 1) + '文字以上は入力できません')
      this.$v.inputValue.email !== undefined && !this.$v.inputValue.email&& errors.push(this.displayName + 'の形式に誤りがあります')
      return errors
    },

    setValidations(){
      const requiredObj = 'required' in this.validationNames && this.validationNames.required ? { required } : {}
      const maxLengthObj = 'maxLength' in this.validationNames && Number.isInteger(this.validationNames.maxLength) ? { maxLength: maxLength(this.validationNames.maxLength)} : {}
      const emailObj = 'email' in this.validationNames && this.validationNames.email ? { email } : {}
      return { ...requiredObj, ...maxLengthObj, ...emailObj }
    },

    addClassForNw(){
      const upperCase = this.name.charAt(0).toUpperCase() + this.name.slice(1);
      return "nw-textFieldDisplay" + upperCase
    }
  },

  methods: {
    toEditMode(){
      this.editMode = true
      this.$nextTick(() => { document.getElementById(this.name).focus() })
    },

    onChange(){
      this.$v.inputValue.$touch()
      if(this.$v.inputValue.$invalid === false && this.inputValue.length){
        this.editMode = false
      }
      this.$emit('update-form-params', { name: this.name, valid: !this.$v.inputValue.$invalid, value: this.inputValue})
    }
  }
}
</script>

<style lang="sass" scoped>

.text-field-unit
  display: block
  width: 100%

  &__input-block
    padding-left: 24px
    .isMobile &
      padding-left: 1rem

  &__display-block
    position: relative
    padding: 0 12px
    padding-left: 36px
    &.is-text
      height: 86px
    &.is-textarea
      word-break: break-all
    .isMobile &
      width: 295px
      padding-left: 1.75rem

  &__text-block
    position: relative

    .v-icon
      position: absolute
      top: 18px
      left: -24px

  &__text
    position: relative
    &.is-text
      line-height: 56px
      word-break: keep-all
      white-space: nowrap
      overflow: scroll

    &.is-textarea
      min-height: 160px
      padding: 10px 0 0
      line-height: 1.75rem
      word-break: break-word
      white-space: pre-wrap

      .v-icon
        position: absolute
        top: 14px
        left: -24px

</style>
