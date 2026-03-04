import { r as reactExports, j as jsxRuntimeExports } from "./react.mjs";
import { m as mergeObjects, f as formatErrorMessage, u as useStableCallback, a as useIsoLayoutEffect, E as EMPTY_OBJECT, b as useMergedRefs, c as useMergedRefsN, g as getReactElementRef, d as useId, N as NOOP, e as useRefWithInit, h as useControlled, v as visuallyHiddenInput, i as visuallyHidden, j as useAnimationFrame, A as AnimationFrame, k as useTimeout, o as ownerDocument } from "./base-ui__utils.mjs";
import { i as isHTMLElement, a as isElement } from "./floating-ui__utils.mjs";
import { r as reactDomExports } from "./react-dom.mjs";
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
  let merged = {
    ...resolvePropsGetter(a, EMPTY_PROPS)
  };
  if (b) {
    merged = mergeOne(merged, b);
  }
  if (c) {
    merged = mergeOne(merged, c);
  }
  if (d) {
    merged = mergeOne(merged, d);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return resolvePropsGetter(props[0], EMPTY_PROPS);
  }
  let merged = {
    ...resolvePropsGetter(props[0], EMPTY_PROPS)
  };
  for (let i = 1; i < props.length; i += 1) {
    merged = mergeOne(merged, props[i]);
  }
  return merged;
}
function mergeOne(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return theirHandler;
  }
  return (event) => {
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(baseUIEvent);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(baseUIEvent);
      }
      return result2;
    }
    const result = theirHandler(event);
    ourHandler?.(event);
    return result;
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}
const CompositeRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useCompositeRootContext(optional = false) {
  const context = reactExports.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(formatErrorMessage(16));
  }
  return context;
}
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = reactExports.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
      additionalProps["aria-disabled"] = disabled;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled;
    }
    return additionalProps;
  }, [composite, disabled, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}
function useButton(parameters = {}) {
  const {
    disabled = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true
  } = parameters;
  const elementRef = reactExports.useRef(null);
  const isCompositeItem = useCompositeRootContext(true) !== void 0;
  const isValidLink = useStableCallback(() => {
    const element = elementRef.current;
    return Boolean(element?.tagName === "A" && element?.href);
  });
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  const updateDisabled = reactExports.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = reactExports.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps({
      type,
      onClick(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (!disabled) {
          makeEventPreventable(event);
          externalOnKeyDown?.(event);
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const shouldClick = event.target === event.currentTarget && !isNativeButton && !isValidLink() && !disabled;
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        if (shouldClick) {
          if (isSpaceKey || isEnterKey) {
            event.preventDefault();
          }
          if (isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (!disabled) {
          makeEventPreventable(event);
          externalOnKeyUp?.(event);
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !disabled && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled, focusableWhenDisabledProps, isNativeButton, isValidLink]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping2,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping2) : EMPTY_OBJECT;
  const outProps = enabled ? mergeObjects(stateProps, Array.isArray(props) ? mergePropsN(props) : props) ?? EMPTY_OBJECT : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
const REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function evaluateRenderProp(element, render, props, state) {
  if (render) {
    if (typeof render === "function") {
      return render(props, state);
    }
    const mergedProps = mergeProps(props, render.props);
    mergedProps.ref = props.ref;
    let newElement = render;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = reactExports.Children.toArray(render);
      newElement = children[0];
    }
    return /* @__PURE__ */ reactExports.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(formatErrorMessage(8));
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ reactExports.createElement("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ reactExports.createElement("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ reactExports.createElement(Tag, props);
}
const Button = /* @__PURE__ */ reactExports.forwardRef(function Button2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    focusableWhenDisabled = false,
    nativeButton = true,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    focusableWhenDisabled,
    native: nativeButton
  });
  const state = {
    disabled
  };
  return useRenderElement("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [elementProps, getButtonProps]
  });
});
let CheckboxRootDataAttributes = /* @__PURE__ */ (function(CheckboxRootDataAttributes2) {
  CheckboxRootDataAttributes2["checked"] = "data-checked";
  CheckboxRootDataAttributes2["unchecked"] = "data-unchecked";
  CheckboxRootDataAttributes2["indeterminate"] = "data-indeterminate";
  CheckboxRootDataAttributes2["disabled"] = "data-disabled";
  CheckboxRootDataAttributes2["readonly"] = "data-readonly";
  CheckboxRootDataAttributes2["required"] = "data-required";
  CheckboxRootDataAttributes2["valid"] = "data-valid";
  CheckboxRootDataAttributes2["invalid"] = "data-invalid";
  CheckboxRootDataAttributes2["touched"] = "data-touched";
  CheckboxRootDataAttributes2["dirty"] = "data-dirty";
  CheckboxRootDataAttributes2["filled"] = "data-filled";
  CheckboxRootDataAttributes2["focused"] = "data-focused";
  return CheckboxRootDataAttributes2;
})({});
let FieldControlDataAttributes = /* @__PURE__ */ (function(FieldControlDataAttributes2) {
  FieldControlDataAttributes2["disabled"] = "data-disabled";
  FieldControlDataAttributes2["valid"] = "data-valid";
  FieldControlDataAttributes2["invalid"] = "data-invalid";
  FieldControlDataAttributes2["touched"] = "data-touched";
  FieldControlDataAttributes2["dirty"] = "data-dirty";
  FieldControlDataAttributes2["filled"] = "data-filled";
  FieldControlDataAttributes2["focused"] = "data-focused";
  return FieldControlDataAttributes2;
})({});
const DEFAULT_VALIDITY_STATE = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: null,
  valueMissing: false
};
const fieldValidityMapping = {
  valid(value) {
    if (value === null) {
      return null;
    }
    if (value) {
      return {
        [FieldControlDataAttributes.valid]: ""
      };
    }
    return {
      [FieldControlDataAttributes.invalid]: ""
    };
  }
};
function useStateAttributesMapping(state) {
  return reactExports.useMemo(() => ({
    checked(value) {
      if (state.indeterminate) {
        return {};
      }
      if (value) {
        return {
          [CheckboxRootDataAttributes.checked]: ""
        };
      }
      return {
        [CheckboxRootDataAttributes.unchecked]: ""
      };
    },
    ...fieldValidityMapping
  }), [state.indeterminate]);
}
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}
const FieldRootContext = /* @__PURE__ */ reactExports.createContext({
  invalid: void 0,
  name: void 0,
  validityData: {
    state: DEFAULT_VALIDITY_STATE,
    errors: [],
    error: "",
    value: "",
    initialValue: null
  },
  setValidityData: NOOP,
  disabled: void 0,
  touched: false,
  setTouched: NOOP,
  dirty: false,
  setDirty: NOOP,
  filled: false,
  setFilled: NOOP,
  focused: false,
  setFocused: NOOP,
  validate: () => null,
  validationMode: "onSubmit",
  validationDebounceTime: 0,
  shouldValidateOnChange: () => false,
  state: {
    disabled: false,
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
  },
  markedDirtyRef: {
    current: false
  },
  validation: {
    getValidationProps: (props = EMPTY_OBJECT) => props,
    getInputValidationProps: (props = EMPTY_OBJECT) => props,
    inputRef: {
      current: null
    },
    commit: async () => {
    }
  }
});
function useFieldRootContext(optional = true) {
  const context = reactExports.useContext(FieldRootContext);
  if (context.setValidityData === NOOP && !optional) {
    throw new Error(formatErrorMessage(28));
  }
  return context;
}
const FieldItemContext = /* @__PURE__ */ reactExports.createContext({
  disabled: false
});
function useFieldItemContext() {
  const context = reactExports.useContext(FieldItemContext);
  return context;
}
function getCombinedFieldValidityData(validityData, invalid) {
  return {
    ...validityData,
    state: {
      ...validityData.state,
      valid: !invalid && validityData.state.valid
    }
  };
}
const FormContext = /* @__PURE__ */ reactExports.createContext({
  formRef: {
    current: {
      fields: /* @__PURE__ */ new Map()
    }
  },
  errors: {},
  clearErrors: NOOP,
  validationMode: "onSubmit",
  submitAttemptedRef: {
    current: false
  }
});
function useFormContext() {
  return reactExports.useContext(FormContext);
}
function useField(params) {
  const {
    enabled = true,
    value,
    id,
    name,
    controlRef,
    commit
  } = params;
  const {
    formRef
  } = useFormContext();
  const {
    invalid,
    markedDirtyRef,
    validityData,
    setValidityData
  } = useFieldRootContext();
  const getValue = useStableCallback(params.getValue);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return;
    }
    let initialValue = value;
    if (initialValue === void 0) {
      initialValue = getValue();
    }
    if (validityData.initialValue === null && initialValue !== null) {
      setValidityData((prev) => ({
        ...prev,
        initialValue
      }));
    }
  }, [enabled, setValidityData, value, validityData.initialValue, getValue]);
  useIsoLayoutEffect(() => {
    if (!enabled || !id) {
      return;
    }
    formRef.current.fields.set(id, {
      getValue,
      name,
      controlRef,
      validityData: getCombinedFieldValidityData(validityData, invalid),
      validate(flushSync = true) {
        let nextValue = value;
        if (nextValue === void 0) {
          nextValue = getValue();
        }
        markedDirtyRef.current = true;
        if (!flushSync) {
          commit(nextValue);
        } else {
          reactDomExports.flushSync(() => commit(nextValue));
        }
      }
    });
  }, [commit, controlRef, enabled, formRef, getValue, id, invalid, markedDirtyRef, name, validityData, value]);
  useIsoLayoutEffect(() => {
    const fields = formRef.current.fields;
    return () => {
      if (id) {
        fields.delete(id);
      }
    };
  }, [formRef, id]);
}
const LabelableContext = /* @__PURE__ */ reactExports.createContext({
  controlId: void 0,
  registerControlId: NOOP,
  labelId: void 0,
  setLabelId: NOOP,
  messageIds: [],
  setMessageIds: NOOP,
  getDescriptionProps: (externalProps) => externalProps
});
function useLabelableContext() {
  return reactExports.useContext(LabelableContext);
}
const CheckboxGroupContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useCheckboxGroupContext(optional = true) {
  const context = reactExports.useContext(CheckboxGroupContext);
  if (context === void 0 && !optional) {
    throw new Error(formatErrorMessage(3));
  }
  return context;
}
const CheckboxRootContext = /* @__PURE__ */ reactExports.createContext(void 0);
function useCheckboxRootContext() {
  const context = reactExports.useContext(CheckboxRootContext);
  if (context === void 0) {
    throw new Error(formatErrorMessage(14));
  }
  return context;
}
const none = "none";
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}
function useValueChanged(value, onChange) {
  const valueRef = reactExports.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current === value) {
      return;
    }
    onChangeCallback(valueRef.current);
  }, [value, onChangeCallback]);
  useIsoLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
}
const PARENT_CHECKBOX = "data-parent";
const CheckboxRoot = /* @__PURE__ */ reactExports.forwardRef(function CheckboxRoot2(componentProps, forwardedRef) {
  const {
    checked: checkedProp,
    className,
    defaultChecked = false,
    disabled: disabledProp = false,
    id: idProp,
    indeterminate = false,
    inputRef: inputRefProp,
    name: nameProp,
    onCheckedChange: onCheckedChangeProp,
    parent = false,
    readOnly = false,
    render,
    required = false,
    uncheckedValue,
    value: valueProp,
    nativeButton = false,
    ...elementProps
  } = componentProps;
  const {
    clearErrors
  } = useFormContext();
  const {
    disabled: rootDisabled,
    name: fieldName,
    setDirty,
    setFilled,
    setFocused,
    setTouched,
    state: fieldState,
    validationMode,
    validityData,
    shouldValidateOnChange,
    validation: localValidation
  } = useFieldRootContext();
  const fieldItemContext = useFieldItemContext();
  const {
    labelId,
    controlId,
    registerControlId,
    getDescriptionProps
  } = useLabelableContext();
  const groupContext = useCheckboxGroupContext();
  const parentContext = groupContext?.parent;
  const isGroupedWithParent = parentContext && groupContext.allValues;
  const disabled = rootDisabled || fieldItemContext.disabled || groupContext?.disabled || disabledProp;
  const name = fieldName ?? nameProp;
  const value = valueProp ?? name;
  const id = useBaseUiId();
  const parentId = useBaseUiId();
  let inputId = controlId;
  if (isGroupedWithParent) {
    inputId = parent ? parentId : `${parentContext.id}-${value}`;
  } else if (idProp) {
    inputId = idProp;
  }
  let groupProps = {};
  if (isGroupedWithParent) {
    if (parent) {
      groupProps = groupContext.parent.getParentProps();
    } else if (value) {
      groupProps = groupContext.parent.getChildProps(value);
    }
  }
  const onCheckedChange = useStableCallback(onCheckedChangeProp);
  const {
    checked: groupChecked = checkedProp,
    indeterminate: groupIndeterminate = indeterminate,
    onCheckedChange: groupOnChange,
    ...otherGroupProps
  } = groupProps;
  const groupValue = groupContext?.value;
  const setGroupValue = groupContext?.setValue;
  const defaultGroupValue = groupContext?.defaultValue;
  const controlRef = reactExports.useRef(null);
  const controlSourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol("checkbox-control"));
  const hasRegisteredRef = reactExports.useRef(false);
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled,
    native: nativeButton
  });
  const validation = groupContext?.validation ?? localValidation;
  const [checked, setCheckedState] = useControlled({
    controlled: value && groupValue && !parent ? groupValue.includes(value) : groupChecked,
    default: value && defaultGroupValue && !parent ? defaultGroupValue.includes(value) : defaultChecked,
    name: "Checkbox",
    state: "checked"
  });
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, inputId);
    return void 0;
  }, [inputId, groupContext, registerControlId, parent, controlSourceRef]);
  reactExports.useEffect(() => {
    const controlSource = controlSourceRef.current;
    return () => {
      if (!hasRegisteredRef.current || registerControlId === NOOP) {
        return;
      }
      hasRegisteredRef.current = false;
      registerControlId(controlSource, void 0);
    };
  }, [registerControlId, controlSourceRef]);
  useField({
    enabled: !groupContext,
    id,
    commit: validation.commit,
    value: checked,
    controlRef,
    name,
    getValue: () => checked
  });
  const inputRef = reactExports.useRef(null);
  const mergedInputRef = useMergedRefs(inputRefProp, inputRef, validation.inputRef);
  useIsoLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = groupIndeterminate;
      if (checked) {
        setFilled(true);
      }
    }
  }, [checked, groupIndeterminate, setFilled]);
  useValueChanged(checked, () => {
    if (groupContext && !parent) {
      return;
    }
    clearErrors(name);
    setFilled(checked);
    setDirty(checked !== validityData.initialValue);
    if (shouldValidateOnChange()) {
      validation.commit(checked);
    } else {
      validation.commit(checked, true);
    }
  });
  const inputProps = mergeProps(
    {
      checked,
      disabled,
      // parent checkboxes unset `name` to be excluded from form submission
      name: parent ? void 0 : name,
      // Set `id` to stop Chrome warning about an unassociated input.
      // When using a native button, the `id` is applied to the button instead.
      id: nativeButton ? void 0 : inputId ?? void 0,
      required,
      ref: mergedInputRef,
      style: name ? visuallyHiddenInput : visuallyHidden,
      tabIndex: -1,
      type: "checkbox",
      "aria-hidden": true,
      onChange(event) {
        if (event.nativeEvent.defaultPrevented) {
          return;
        }
        const nextChecked = event.target.checked;
        const details = createChangeEventDetails(none, event.nativeEvent);
        groupOnChange?.(nextChecked, details);
        onCheckedChange(nextChecked, details);
        if (details.isCanceled) {
          return;
        }
        setCheckedState(nextChecked);
        if (value && groupValue && setGroupValue && !parent) {
          const nextGroupValue = nextChecked ? [...groupValue, value] : groupValue.filter((item) => item !== value);
          setGroupValue(nextGroupValue, details);
        }
      },
      onFocus() {
        controlRef.current?.focus();
      }
    },
    // React <19 sets an empty value if `undefined` is passed explicitly
    // To avoid this, we only set the value if it's defined
    valueProp !== void 0 ? {
      value: (groupContext ? checked && valueProp : valueProp) || ""
    } : EMPTY_OBJECT,
    getDescriptionProps,
    groupContext ? validation.getValidationProps : validation.getInputValidationProps
  );
  const computedChecked = isGroupedWithParent ? Boolean(groupChecked) : checked;
  const computedIndeterminate = isGroupedWithParent ? groupIndeterminate || indeterminate : indeterminate;
  reactExports.useEffect(() => {
    if (!parentContext || !value) {
      return void 0;
    }
    const disabledStates = parentContext.disabledStatesRef.current;
    disabledStates.set(value, disabled);
    return () => {
      disabledStates.delete(value);
    };
  }, [parentContext, disabled, value]);
  const state = reactExports.useMemo(() => ({
    ...fieldState,
    checked: computedChecked,
    disabled,
    readOnly,
    required,
    indeterminate: computedIndeterminate
  }), [fieldState, computedChecked, disabled, readOnly, required, computedIndeterminate]);
  const stateAttributesMapping2 = useStateAttributesMapping(state);
  const element = useRenderElement("span", componentProps, {
    state,
    ref: [buttonRef, controlRef, forwardedRef, groupContext?.registerControlRef],
    props: [{
      id: nativeButton ? inputId ?? void 0 : id,
      role: "checkbox",
      "aria-checked": groupIndeterminate ? "mixed" : checked,
      "aria-readonly": readOnly || void 0,
      "aria-required": required || void 0,
      "aria-labelledby": labelId,
      [PARENT_CHECKBOX]: parent ? "" : void 0,
      onFocus() {
        setFocused(true);
      },
      onBlur() {
        const inputEl = inputRef.current;
        if (!inputEl) {
          return;
        }
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(groupContext ? groupValue : inputEl.checked);
        }
      },
      onClick(event) {
        if (readOnly || disabled) {
          return;
        }
        event.preventDefault();
        inputRef.current?.dispatchEvent(new PointerEvent("click", {
          bubbles: true,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          altKey: event.altKey,
          metaKey: event.metaKey
        }));
      }
    }, getDescriptionProps, validation.getValidationProps, elementProps, otherGroupProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping2
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CheckboxRootContext.Provider, {
    value: state,
    children: [element, !checked && !groupContext && name && !parent && uncheckedValue !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      type: "hidden",
      name,
      value: uncheckedValue
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
      ...inputProps
    })]
  });
});
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}
let TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes2) {
  TransitionStatusDataAttributes2["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes2["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes2;
})({});
const STARTING_HOOK = {
  [TransitionStatusDataAttributes.startingStyle]: ""
};
const ENDING_HOOK = {
  [TransitionStatusDataAttributes.endingStyle]: ""
};
const transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    function done() {
      reactDomExports.flushSync(fnToExecute);
    }
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
    } else {
      let execWaitForStartingStyleRemoved = function() {
        const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          frame.request(exec);
          return;
        }
        const attributeObserver = new MutationObserver(() => {
          if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
            attributeObserver.disconnect();
            exec();
          }
        });
        attributeObserver.observe(resolvedElement, {
          attributes: true,
          attributeFilter: [startingStyleAttribute]
        });
        signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
          once: true
        });
      }, exec = function() {
        Promise.all(resolvedElement.getAnimations().map((anim) => anim.finished)).then(() => {
          if (signal?.aborted) {
            return;
          }
          done();
        }).catch(() => {
          const currentAnimations = resolvedElement.getAnimations();
          if (treatAbortedAsFinished) {
            if (signal?.aborted) {
              return;
            }
            done();
          } else if (currentAnimations.length > 0 && currentAnimations.some((anim) => anim.pending || anim.playState !== "finished")) {
            exec();
          }
        });
      };
      if (waitForStartingStyleRemoved) {
        execWaitForStartingStyleRemoved();
        return;
      }
      frame.request(exec);
    }
  });
}
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
  reactExports.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = reactExports.useState(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = reactExports.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, setTransitionStatus, transitionStatus]);
  return reactExports.useMemo(() => ({
    mounted,
    setMounted,
    transitionStatus
  }), [mounted, transitionStatus]);
}
const CheckboxIndicator = /* @__PURE__ */ reactExports.forwardRef(function CheckboxIndicator2(componentProps, forwardedRef) {
  const {
    render,
    className,
    keepMounted = false,
    ...elementProps
  } = componentProps;
  const rootState = useCheckboxRootContext();
  const rendered = rootState.checked || rootState.indeterminate;
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(rendered);
  const indicatorRef = reactExports.useRef(null);
  const state = {
    ...rootState,
    transitionStatus
  };
  useOpenChangeComplete({
    open: rendered,
    ref: indicatorRef,
    onComplete() {
      if (!rendered) {
        setMounted(false);
      }
    }
  });
  const baseStateAttributesMapping = useStateAttributesMapping(rootState);
  const stateAttributesMapping2 = reactExports.useMemo(() => ({
    ...baseStateAttributesMapping,
    ...transitionStatusMapping,
    ...fieldValidityMapping
  }), [baseStateAttributesMapping]);
  const shouldRender = keepMounted || mounted;
  const element = useRenderElement("span", componentProps, {
    ref: [forwardedRef, indicatorRef],
    state,
    stateAttributesMapping: stateAttributesMapping2,
    props: elementProps
  });
  if (!shouldRender) {
    return null;
  }
  return element;
});
const FieldsetRootContext = /* @__PURE__ */ reactExports.createContext({
  legendId: void 0,
  setLegendId: () => {
  },
  disabled: void 0
});
function useFieldsetRootContext(optional = false) {
  const context = reactExports.useContext(FieldsetRootContext);
  if (!context && !optional) {
    throw new Error(formatErrorMessage(86));
  }
  return context;
}
const LabelableProvider = function LabelableProvider2(props) {
  const defaultId = useBaseUiId();
  const [controlId, setControlIdState] = reactExports.useState(props.initialControlId === void 0 ? defaultId : props.initialControlId);
  const [labelId, setLabelId] = reactExports.useState(void 0);
  const [messageIds, setMessageIds] = reactExports.useState([]);
  const registrationsRef = useRefWithInit(() => /* @__PURE__ */ new Map());
  const {
    messageIds: parentMessageIds
  } = useLabelableContext();
  const registerControlId = useStableCallback((source, nextId) => {
    const registrations = registrationsRef.current;
    if (nextId === void 0) {
      registrations.delete(source);
      return;
    }
    registrations.set(source, nextId);
    setControlIdState((prev) => {
      if (registrations.size === 0) {
        return void 0;
      }
      let nextControlId;
      for (const id of registrations.values()) {
        if (prev !== void 0 && id === prev) {
          return prev;
        }
        if (nextControlId === void 0) {
          nextControlId = id;
        }
      }
      return nextControlId;
    });
  });
  const getDescriptionProps = reactExports.useCallback((externalProps) => {
    return mergeProps({
      "aria-describedby": parentMessageIds.concat(messageIds).join(" ") || void 0
    }, externalProps);
  }, [parentMessageIds, messageIds]);
  const contextValue = reactExports.useMemo(() => ({
    controlId,
    registerControlId,
    labelId,
    setLabelId,
    messageIds,
    setMessageIds,
    getDescriptionProps
  }), [controlId, registerControlId, labelId, setLabelId, messageIds, setMessageIds, getDescriptionProps]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LabelableContext.Provider, {
    value: contextValue,
    children: props.children
  });
};
const validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
function isOnlyValueMissing(state) {
  if (!state || state.valid || !state.valueMissing) {
    return false;
  }
  let onlyValueMissing = false;
  for (const key of validityKeys) {
    if (key === "valid") {
      continue;
    }
    if (key === "valueMissing") {
      onlyValueMissing = state[key];
    }
    if (state[key]) {
      onlyValueMissing = false;
    }
  }
  return onlyValueMissing;
}
function useFieldValidation(params) {
  const {
    formRef,
    clearErrors
  } = useFormContext();
  const {
    setValidityData,
    validate,
    validityData,
    validationDebounceTime,
    invalid,
    markedDirtyRef,
    state,
    name,
    shouldValidateOnChange
  } = params;
  const {
    controlId,
    getDescriptionProps
  } = useLabelableContext();
  const timeout = useTimeout();
  const inputRef = reactExports.useRef(null);
  const commit = useStableCallback(async (value, revalidate = false) => {
    const element = inputRef.current;
    if (!element) {
      return;
    }
    if (revalidate) {
      if (state.valid !== false) {
        return;
      }
      const currentNativeValidity = element.validity;
      if (!currentNativeValidity.valueMissing) {
        const nextValidityData2 = {
          value,
          state: {
            ...DEFAULT_VALIDITY_STATE,
            valid: true
          },
          error: "",
          errors: [],
          initialValue: validityData.initialValue
        };
        element.setCustomValidity("");
        if (controlId) {
          const currentFieldData = formRef.current.fields.get(controlId);
          if (currentFieldData) {
            formRef.current.fields.set(controlId, {
              ...currentFieldData,
              ...getCombinedFieldValidityData(nextValidityData2, false)
              // invalid = false
            });
          }
        }
        setValidityData(nextValidityData2);
        return;
      }
      const currentNativeValidityObject = validityKeys.reduce((acc, key) => {
        acc[key] = currentNativeValidity[key];
        return acc;
      }, {});
      if (!currentNativeValidityObject.valid && !isOnlyValueMissing(currentNativeValidityObject)) {
        return;
      }
    }
    function getState(el) {
      const computedState = validityKeys.reduce((acc, key) => {
        acc[key] = el.validity[key];
        return acc;
      }, {});
      let hasOnlyValueMissingError = false;
      for (const key of validityKeys) {
        if (key === "valid") {
          continue;
        }
        if (key === "valueMissing" && computedState[key]) {
          hasOnlyValueMissingError = true;
        } else if (computedState[key]) {
          return computedState;
        }
      }
      if (hasOnlyValueMissingError && !markedDirtyRef.current) {
        computedState.valid = true;
        computedState.valueMissing = false;
      }
      return computedState;
    }
    timeout.clear();
    let result = null;
    let validationErrors = [];
    const nextState = getState(element);
    let defaultValidationMessage;
    const validateOnChange = shouldValidateOnChange();
    if (element.validationMessage && !validateOnChange) {
      defaultValidationMessage = element.validationMessage;
      validationErrors = [element.validationMessage];
    } else {
      const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field) => {
        if (field.name) {
          acc[field.name] = field.getValue();
        }
        return acc;
      }, {});
      const resultOrPromise = validate(value, formValues);
      if (typeof resultOrPromise === "object" && resultOrPromise !== null && "then" in resultOrPromise) {
        result = await resultOrPromise;
      } else {
        result = resultOrPromise;
      }
      if (result !== null) {
        nextState.valid = false;
        nextState.customError = true;
        if (Array.isArray(result)) {
          validationErrors = result;
          element.setCustomValidity(result.join("\n"));
        } else if (result) {
          validationErrors = [result];
          element.setCustomValidity(result);
        }
      } else if (validateOnChange) {
        element.setCustomValidity("");
        nextState.customError = false;
        if (element.validationMessage) {
          defaultValidationMessage = element.validationMessage;
          validationErrors = [element.validationMessage];
        } else if (element.validity.valid && !nextState.valid) {
          nextState.valid = true;
        }
      }
    }
    const nextValidityData = {
      value,
      state: nextState,
      error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ""),
      errors: validationErrors,
      initialValue: validityData.initialValue
    };
    if (controlId) {
      const currentFieldData = formRef.current.fields.get(controlId);
      if (currentFieldData) {
        formRef.current.fields.set(controlId, {
          ...currentFieldData,
          ...getCombinedFieldValidityData(nextValidityData, invalid)
        });
      }
    }
    setValidityData(nextValidityData);
  });
  const getValidationProps = reactExports.useCallback((externalProps = {}) => mergeProps(getDescriptionProps, state.valid === false ? {
    "aria-invalid": true
  } : EMPTY_OBJECT, externalProps), [getDescriptionProps, state.valid]);
  const getInputValidationProps = reactExports.useCallback((externalProps = {}) => mergeProps({
    onChange(event) {
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      clearErrors(name);
      if (!shouldValidateOnChange()) {
        commit(event.currentTarget.value, true);
        return;
      }
      if (invalid) {
        return;
      }
      const element = event.currentTarget;
      if (element.value === "") {
        commit(element.value);
        return;
      }
      timeout.clear();
      if (validationDebounceTime) {
        timeout.start(validationDebounceTime, () => {
          commit(element.value);
        });
      } else {
        commit(element.value);
      }
    }
  }, getValidationProps(externalProps)), [getValidationProps, clearErrors, name, timeout, commit, invalid, validationDebounceTime, shouldValidateOnChange]);
  return reactExports.useMemo(() => ({
    getValidationProps,
    getInputValidationProps,
    inputRef,
    commit
  }), [getValidationProps, getInputValidationProps, commit]);
}
const FieldRootInner = /* @__PURE__ */ reactExports.forwardRef(function FieldRootInner2(componentProps, forwardedRef) {
  const {
    errors,
    validationMode: formValidationMode,
    submitAttemptedRef
  } = useFormContext();
  const {
    render,
    className,
    validate: validateProp,
    validationDebounceTime = 0,
    validationMode = formValidationMode,
    name,
    disabled: disabledProp = false,
    invalid: invalidProp,
    dirty: dirtyProp,
    touched: touchedProp,
    actionsRef,
    ...elementProps
  } = componentProps;
  const {
    disabled: disabledFieldset
  } = useFieldsetRootContext();
  const validate = useStableCallback(validateProp || (() => null));
  const disabled = disabledFieldset || disabledProp;
  const [touchedState, setTouchedUnwrapped] = reactExports.useState(false);
  const [dirtyState, setDirtyUnwrapped] = reactExports.useState(false);
  const [filled, setFilled] = reactExports.useState(false);
  const [focused, setFocused] = reactExports.useState(false);
  const dirty = dirtyProp ?? dirtyState;
  const touched = touchedProp ?? touchedState;
  const markedDirtyRef = reactExports.useRef(false);
  const setDirty = useStableCallback((value) => {
    if (dirtyProp !== void 0) {
      return;
    }
    if (value) {
      markedDirtyRef.current = true;
    }
    setDirtyUnwrapped(value);
  });
  const setTouched = useStableCallback((value) => {
    if (touchedProp !== void 0) {
      return;
    }
    setTouchedUnwrapped(value);
  });
  const shouldValidateOnChange = useStableCallback(() => validationMode === "onChange" || validationMode === "onSubmit" && submitAttemptedRef.current);
  const invalid = Boolean(invalidProp || name && {}.hasOwnProperty.call(errors, name) && errors[name] !== void 0);
  const [validityData, setValidityData] = reactExports.useState({
    state: DEFAULT_VALIDITY_STATE,
    error: "",
    errors: [],
    value: null,
    initialValue: null
  });
  const valid = !invalid && validityData.state.valid;
  const state = reactExports.useMemo(() => ({
    disabled,
    touched,
    dirty,
    valid,
    filled,
    focused
  }), [disabled, touched, dirty, valid, filled, focused]);
  const validation = useFieldValidation({
    setValidityData,
    validate,
    validityData,
    validationDebounceTime,
    invalid,
    markedDirtyRef,
    state,
    name,
    shouldValidateOnChange
  });
  const handleImperativeValidate = reactExports.useCallback(() => {
    markedDirtyRef.current = true;
    validation.commit(validityData.value);
  }, [validation, validityData]);
  reactExports.useImperativeHandle(actionsRef, () => ({
    validate: handleImperativeValidate
  }), [handleImperativeValidate]);
  const contextValue = reactExports.useMemo(() => ({
    invalid,
    name,
    validityData,
    setValidityData,
    disabled,
    touched,
    setTouched,
    dirty,
    setDirty,
    filled,
    setFilled,
    focused,
    setFocused,
    validate,
    validationMode,
    validationDebounceTime,
    shouldValidateOnChange,
    state,
    markedDirtyRef,
    validation
  }), [invalid, name, validityData, disabled, touched, setTouched, dirty, setDirty, filled, setFilled, focused, setFocused, validate, validationMode, validationDebounceTime, shouldValidateOnChange, state, validation]);
  const element = useRenderElement("div", componentProps, {
    ref: forwardedRef,
    state,
    props: elementProps,
    stateAttributesMapping: fieldValidityMapping
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
const FieldRoot = /* @__PURE__ */ reactExports.forwardRef(function FieldRoot2(componentProps, forwardedRef) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LabelableProvider, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FieldRootInner, {
      ...componentProps,
      ref: forwardedRef
    })
  });
});
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
const FieldLabel = /* @__PURE__ */ reactExports.forwardRef(function FieldLabel2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    nativeLabel = true,
    ...elementProps
  } = componentProps;
  const fieldRootContext = useFieldRootContext(false);
  const {
    controlId,
    setLabelId,
    labelId
  } = useLabelableContext();
  const id = useBaseUiId(idProp);
  const labelRef = reactExports.useRef(null);
  const handleInteraction = useStableCallback((event) => {
    const target = getTarget(event.nativeEvent);
    if (target?.closest("button,input,select,textarea")) {
      return;
    }
    if (!event.defaultPrevented && event.detail > 1) {
      event.preventDefault();
    }
    if (nativeLabel || !controlId) {
      return;
    }
    const controlElement = ownerDocument(event.currentTarget).getElementById(controlId);
    if (isHTMLElement(controlElement)) {
      controlElement.focus({
        // Available from Chrome 144+ (January 2026).
        // Safari and Firefox already support it.
        // @ts-expect-error not available in types yet
        focusVisible: true
      });
    }
  });
  useIsoLayoutEffect(() => {
    if (id) {
      setLabelId(id);
    }
    return () => {
      setLabelId(void 0);
    };
  }, [id, setLabelId]);
  const element = useRenderElement("label", componentProps, {
    ref: [forwardedRef, labelRef],
    state: fieldRootContext.state,
    props: [{
      id: labelId
    }, nativeLabel ? {
      htmlFor: controlId ?? void 0,
      onMouseDown: handleInteraction
    } : {
      onClick: handleInteraction,
      onPointerDown(event) {
        event.preventDefault();
      }
    }, elementProps],
    stateAttributesMapping: fieldValidityMapping
  });
  return element;
});
const stateAttributesMapping = {
  ...fieldValidityMapping,
  ...transitionStatusMapping
};
const FieldError = /* @__PURE__ */ reactExports.forwardRef(function FieldError2(componentProps, forwardedRef) {
  const {
    render,
    id: idProp,
    className,
    match,
    ...elementProps
  } = componentProps;
  const id = useBaseUiId(idProp);
  const {
    validityData,
    state: fieldState,
    name
  } = useFieldRootContext(false);
  const {
    setMessageIds
  } = useLabelableContext();
  const {
    errors
  } = useFormContext();
  const formError = name ? errors[name] : null;
  let rendered = false;
  if (formError || match === true) {
    rendered = true;
  } else if (match) {
    rendered = Boolean(validityData.state[match]);
  } else {
    rendered = validityData.state.valid === false;
  }
  const {
    mounted,
    transitionStatus,
    setMounted
  } = useTransitionStatus(rendered);
  useIsoLayoutEffect(() => {
    if (!rendered || !id) {
      return void 0;
    }
    setMessageIds((v) => v.concat(id));
    return () => {
      setMessageIds((v) => v.filter((item) => item !== id));
    };
  }, [rendered, id, setMessageIds]);
  const errorRef = reactExports.useRef(null);
  const [lastRenderedMessage, setLastRenderedMessage] = reactExports.useState(null);
  const [lastRenderedMessageKey, setLastRenderedMessageKey] = reactExports.useState(null);
  const errorMessage = formError || (validityData.errors.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
    children: validityData.errors.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
      children: message
    }, message))
  }) : validityData.error);
  let errorKey = validityData.error;
  if (formError != null) {
    errorKey = Array.isArray(formError) ? JSON.stringify(formError) : formError;
  } else if (validityData.errors.length > 1) {
    errorKey = JSON.stringify(validityData.errors);
  }
  if (rendered && errorKey !== lastRenderedMessageKey) {
    setLastRenderedMessageKey(errorKey);
    setLastRenderedMessage(errorMessage);
  }
  useOpenChangeComplete({
    open: rendered,
    ref: errorRef,
    onComplete() {
      if (!rendered) {
        setMounted(false);
      }
    }
  });
  const state = {
    ...fieldState,
    transitionStatus
  };
  const element = useRenderElement("div", componentProps, {
    ref: [forwardedRef, errorRef],
    state,
    props: [{
      id,
      children: rendered ? errorMessage : lastRenderedMessage
    }, elementProps],
    stateAttributesMapping,
    enabled: mounted
  });
  if (!mounted) {
    return null;
  }
  return element;
});
function useLabelableId(params = {}) {
  const {
    id,
    implicit = false,
    controlRef
  } = params;
  const {
    controlId,
    registerControlId
  } = useLabelableContext();
  const defaultId = useBaseUiId(id);
  const controlIdForEffect = implicit ? controlId : void 0;
  const controlSourceRef = useRefWithInit(() => /* @__PURE__ */ Symbol("labelable-control"));
  const hasRegisteredRef = reactExports.useRef(false);
  const hadExplicitIdRef = reactExports.useRef(id != null);
  const unregisterControlId = useStableCallback(() => {
    if (!hasRegisteredRef.current || registerControlId === NOOP) {
      return;
    }
    hasRegisteredRef.current = false;
    registerControlId(controlSourceRef.current, void 0);
  });
  useIsoLayoutEffect(() => {
    if (registerControlId === NOOP) {
      return void 0;
    }
    let nextId;
    if (implicit) {
      const elem = controlRef?.current;
      if (isElement(elem) && elem.closest("label") != null) {
        nextId = id ?? null;
      } else {
        nextId = controlIdForEffect ?? defaultId;
      }
    } else if (id != null) {
      hadExplicitIdRef.current = true;
      nextId = id;
    } else if (hadExplicitIdRef.current) {
      nextId = defaultId;
    } else {
      unregisterControlId();
      return void 0;
    }
    if (nextId === void 0) {
      unregisterControlId();
      return void 0;
    }
    hasRegisteredRef.current = true;
    registerControlId(controlSourceRef.current, nextId);
    return void 0;
  }, [id, controlRef, controlIdForEffect, registerControlId, implicit, defaultId, controlSourceRef, unregisterControlId]);
  reactExports.useEffect(() => {
    return unregisterControlId;
  }, [unregisterControlId]);
  return controlId ?? defaultId;
}
const FieldControl = /* @__PURE__ */ reactExports.forwardRef(function FieldControl2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    name: nameProp,
    value: valueProp,
    disabled: disabledProp = false,
    onValueChange,
    defaultValue,
    autoFocus = false,
    ...elementProps
  } = componentProps;
  const {
    state: fieldState,
    name: fieldName,
    disabled: fieldDisabled,
    setTouched,
    setDirty,
    validityData,
    setFocused,
    setFilled,
    validationMode,
    validation
  } = useFieldRootContext();
  const disabled = fieldDisabled || disabledProp;
  const name = fieldName ?? nameProp;
  const state = {
    ...fieldState,
    disabled
  };
  const {
    labelId
  } = useLabelableContext();
  const id = useLabelableId({
    id: idProp
  });
  useIsoLayoutEffect(() => {
    const hasExternalValue = valueProp != null;
    if (validation.inputRef.current?.value || hasExternalValue && valueProp !== "") {
      setFilled(true);
    } else if (hasExternalValue && valueProp === "") {
      setFilled(false);
    }
  }, [validation.inputRef, setFilled, valueProp]);
  const inputRef = reactExports.useRef(null);
  useIsoLayoutEffect(() => {
    if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) {
      setFocused(true);
    }
  }, [autoFocus, setFocused]);
  const [valueUnwrapped] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "FieldControl",
    state: "value"
  });
  const isControlled = valueProp !== void 0;
  const value = isControlled ? valueUnwrapped : void 0;
  useField({
    id,
    name,
    commit: validation.commit,
    value,
    getValue: () => validation.inputRef.current?.value,
    controlRef: validation.inputRef
  });
  const element = useRenderElement("input", componentProps, {
    ref: [forwardedRef, inputRef],
    state,
    props: [{
      id,
      disabled,
      name,
      ref: validation.inputRef,
      "aria-labelledby": labelId,
      autoFocus,
      ...isControlled ? {
        value
      } : {
        defaultValue
      },
      onChange(event) {
        const inputValue = event.currentTarget.value;
        onValueChange?.(inputValue, createChangeEventDetails(none, event.nativeEvent));
        setDirty(inputValue !== validityData.initialValue);
        setFilled(inputValue !== "");
      },
      onFocus() {
        setFocused(true);
      },
      onBlur(event) {
        setTouched(true);
        setFocused(false);
        if (validationMode === "onBlur") {
          validation.commit(event.currentTarget.value);
        }
      },
      onKeyDown(event) {
        if (event.currentTarget.tagName === "INPUT" && event.key === "Enter") {
          setTouched(true);
          validation.commit(event.currentTarget.value);
        }
      }
    }, validation.getInputValidationProps(), elementProps],
    stateAttributesMapping: fieldValidityMapping
  });
  return element;
});
const FieldsetRoot = /* @__PURE__ */ reactExports.forwardRef(function FieldsetRoot2(componentProps, forwardedRef) {
  const {
    render,
    className,
    disabled = false,
    ...elementProps
  } = componentProps;
  const [legendId, setLegendId] = reactExports.useState(void 0);
  const state = {
    disabled
  };
  const element = useRenderElement("fieldset", componentProps, {
    ref: forwardedRef,
    state,
    props: [{
      "aria-labelledby": legendId
    }, elementProps]
  });
  const contextValue = reactExports.useMemo(() => ({
    legendId,
    setLegendId,
    disabled
  }), [legendId, setLegendId, disabled]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FieldsetRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
const FieldsetLegend = /* @__PURE__ */ reactExports.forwardRef(function FieldsetLegend2(componentProps, forwardedRef) {
  const {
    render,
    className,
    id: idProp,
    ...elementProps
  } = componentProps;
  const {
    disabled,
    setLegendId
  } = useFieldsetRootContext();
  const id = useBaseUiId(idProp);
  useIsoLayoutEffect(() => {
    setLegendId(id);
    return () => {
      setLegendId(void 0);
    };
  }, [setLegendId, id]);
  const state = {
    disabled: disabled ?? false
  };
  const element = useRenderElement("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
const Input = /* @__PURE__ */ reactExports.forwardRef(function Input2(props, forwardedRef) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FieldControl, {
    ref: forwardedRef,
    ...props
  });
});
function useRender(params) {
  return useRenderElement(params.defaultTagName ?? "div", params, params);
}
export {
  Button as B,
  CheckboxRoot as C,
  FieldsetRoot as F,
  Input as I,
  FieldsetLegend as a,
  FieldRoot as b,
  FieldLabel as c,
  FieldError as d,
  CheckboxIndicator as e,
  useRender as u
};
