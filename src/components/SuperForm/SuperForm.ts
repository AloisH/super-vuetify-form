import { VForm, VTextField } from "vuetify/components";
import { defineComponent, h, type PropType } from "vue";
import type { FieldConfig } from "../SuperForm/SuperForm.type";

const typeToComponent: any = {
  input: VTextField,
};

function generateVNoteFromFieldConfig(
  fieldConfigs: FieldConfig[],
  fieldValue: any
) {
  return fieldConfigs.map((fieldConfig) => {
    const component = typeToComponent[fieldConfig.type];
    return h(component, {
      modelValue: fieldValue[fieldConfig.key],
      "onUpdate:modelValue": (value: any) => {
        fieldValue[fieldConfig.key] = value;
      },
      ...fieldConfig.props,
    });
  });
}

export default defineComponent({
  props: {
    fieldConfigs: {
      type: Array as PropType<FieldConfig[]>,
      required: true,
    },
    fields: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  emits: ["submit"],
  setup(props, { slots, emit }) {
    return () =>
      h(
        VForm,
        {
          submit: () => {
            emit("submit", props.fields);
          },
        },
        () => {
          const form = generateVNoteFromFieldConfig(
            props.fieldConfigs,
            props.fields
          );
          const mainSlot = slots.default?.();
          return [...form, mainSlot];
        }
      );
  },
});
