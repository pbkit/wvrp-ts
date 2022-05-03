import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "https:/deno.land/x/pbkit@v0.0.45/core/runtime/json/scalar.ts";
import {
  WireMessage,
} from "https:/deno.land/x/pbkit@v0.0.45/core/runtime/wire/index.ts";
import {
  default as serialize,
} from "https:/deno.land/x/pbkit@v0.0.45/core/runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "https:/deno.land/x/pbkit@v0.0.45/core/runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "https:/deno.land/x/pbkit@v0.0.45/core/runtime/wire/deserialize.ts";

export declare namespace $.pbkit.wvrp {
  export interface WvrpGuestMessage_ReqFinish {
    reqId: string;
  }
}
export type Type = $.pbkit.wvrp.WvrpGuestMessage_ReqFinish;

export function getDefaultValue(): $.pbkit.wvrp.WvrpGuestMessage_ReqFinish {
  return {
    reqId: "",
  };
}

export function createValue(partialValue: Partial<$.pbkit.wvrp.WvrpGuestMessage_ReqFinish>): $.pbkit.wvrp.WvrpGuestMessage_ReqFinish {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.pbkit.wvrp.WvrpGuestMessage_ReqFinish): unknown {
  const result: any = {};
  if (value.reqId !== undefined) result.reqId = tsValueToJsonValueFns.string(value.reqId);
  return result;
}

export function decodeJson(value: any): $.pbkit.wvrp.WvrpGuestMessage_ReqFinish {
  const result = getDefaultValue();
  if (value.reqId !== undefined) result.reqId = jsonValueToTsValueFns.string(value.reqId);
  return result;
}

export function encodeBinary(value: $.pbkit.wvrp.WvrpGuestMessage_ReqFinish): Uint8Array {
  const result: WireMessage = [];
  if (value.reqId !== undefined) {
    const tsValue = value.reqId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.pbkit.wvrp.WvrpGuestMessage_ReqFinish {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.reqId = value;
  }
  return result;
}
