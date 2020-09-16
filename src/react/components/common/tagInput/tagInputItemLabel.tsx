// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from "react";
import { ILabel, IFormRegion, ITag, FieldType } from "../../../../models/applicationState";
import { FontIcon } from "@fluentui/react";

export interface ITagInputItemLabelProps {
    label: ILabel;
    onLabelEnter: (label: ILabel) => void;
    onLabelLeave: (label: ILabel) => void;
    tag?: ITag;
}

export interface ITagInputItemLabelState {}

export default class TagInputItemLabel extends React.Component<ITagInputItemLabelProps, ITagInputItemLabelState> {
    public render() {

        const texts = [];
        let hasEmptyTextValue = false;
        this.props.label.value.forEach((formRegion: IFormRegion, idx) => {
            if (formRegion.text === "") {
                hasEmptyTextValue = true;
            } else {
                texts.push(formRegion.text);
            }
        })
        const text = texts.join(" ");

        console.log(this.props.tag)
        if (this.props?.tag?.type === FieldType.Table && this.props.label.value.length > 0) {
            return (
                <div
                    className={"tag-item-label px-2"}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                    <FontIcon className="pr-1 pl-1" iconName="Table" />
                </div>
            );
        }

        return (
            <div
                className={"tag-item-label flex-center px-2"}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className="flex-center">
                    {text}
                    {hasEmptyTextValue &&
                        <FontIcon className="pr-1 pl-1" iconName="RectangleShape"/>
                    }
                </div>
            </div>
        );
    }

    private handleMouseEnter = () => {
        this.props.onLabelEnter(this.props.label);
    }

    private handleMouseLeave = () => {
        this.props.onLabelLeave(this.props.label);
    }
}
