<script setup lang="ts">
import { reactive } from "vue";
import SuperForm from "@/components/SuperForm/SuperForm";
import type { FieldConfig } from "./components/SuperForm/SuperForm.type";

const fieldConfigs: FieldConfig[] = [
  {
    key: "password",
    type: "input",
    props: {
      label: "password",
      rules: [(v: string) => !!v || "Required."],
    },
  },
  {
    key: "passwordRepeat",
    type: "input",
    props: {
      label: "password",
      rules: [
        (v: string) => !!v || "Required.",
        (v: string) => v === fields.password || "Passwords must match.",
      ],
    },
  },
];

function onClickSubmit(res: any) {
  console.log(res);
}

const fields = reactive<any>({});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>

  <main>
    <SuperForm
      @submit="onClickSubmit"
      :fields="fields"
      :field-configs="fieldConfigs"
    >
      <VBtn type="submit">Click me</VBtn>
    </SuperForm>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
