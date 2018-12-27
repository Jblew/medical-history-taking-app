import * as uuid from "uuid";
import * as _ from "lodash";
import ow from "ow";

import { Serializable, Serialized } from "mhta-model";

export class PainAppletRecordModel implements Serializable {
    private static ENTITY = "pain_applet_record_model";

    private site: string;
    private onset: string;
    private character: string;
    private radiation: string;
    private association: string;
    private timeCourse: string;
    private factors: {
        excerbating: string;
        relieving: string;
    };
    private severity: {
        vas: number;
    };

    public constructor(data: PainAppletRecordModel.IV1) {
        data = _.cloneDeep(data);
        this.site = data.site;
        ow(this.site, ow.string.nonEmpty.label("PainAppletRecordModel.site"));

        this.onset = data.onset;
        ow(this.onset, ow.string.nonEmpty.label("PainAppletRecordModel.onset"));

        this.character = data.character;
        ow(this.character, ow.string.nonEmpty.label("PainAppletRecordModel.character"));

        this.radiation = data.radiation;
        ow(this.radiation, ow.string.nonEmpty.label("PainAppletRecordModel.radiation"));

        this.association = data.association;
        ow(this.association, ow.string.nonEmpty.label("PainAppletRecordModel.association"));

        this.timeCourse = data.timeCourse;
        ow(this.timeCourse, ow.string.nonEmpty.label("PainAppletRecordModel.timeCourse"));

        this.factors = data.factors;
        ow(this.factors, ow.object.nonEmpty.label("PainAppletRecordModel.factors"));
        ow(this.factors.excerbating, ow.string.nonEmpty.label("PainAppletRecordModel.factors.excerbating"));
        ow(this.factors.relieving, ow.string.nonEmpty.label("PainAppletRecordModel.factors.relieving"));

        this.severity = data.severity;
        ow(this.severity, ow.object.nonEmpty.label("PainAppletRecordModel.severity"));
        ow(this.severity.vas, ow.number.integer.inRange(0, 10).label("PainAppletRecordModel.severity.vas"));


    }

    public serialize(): PainAppletRecordModel.IV1 & Serialized {
        const serialized: PainAppletRecordModel.IV1 & Serialized = {
            __e: PainAppletRecordModel.ENTITY,
            __v: "1",
            site: this.site,
            onset: this.onset,
            character: this.character,
            radiation: this.radiation,
            association: this.association,
            timeCourse: this.timeCourse,
            factors: this.factors,
            severity: this.severity
        };
        return _.cloneDeep(serialized);
    }

    public static deserialize(serializedObj: PainAppletRecordModel.IV1 & Serialized): PainAppletRecordModel {
        ow(serializedObj.__e, ow.string.equals(PainAppletRecordModel.ENTITY).label("serializedObj.__e"));
        ow(serializedObj.__v, ow.string.equals("1").label("serializedObj.__v"));
        return new PainAppletRecordModel(serializedObj);
    }
}

export namespace PainAppletRecordModel {
    export interface IV1 {
        site: string;
        onset: string;
        character: string;
        radiation: string;
        association: string;
        timeCourse: string;
        factors: {
            excerbating: string;
            relieving: string;
        };
        severity: {
            vas: number;
        };
    }
}
