import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardProps,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { ImageViewer } from "..";

interface ICardMakerProps extends Omit<CardProps, "title"> {
  className?: string;
  imgSrc?: string;
  alt?: string;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  cardText?: string | React.ReactNode;
  button?: React.ReactNode;
  children?: string | React.ReactNode;
  border?: number | string;
  cardBodyClassName?: string;
  CardHeaderClassName?: string;
  cardBodyContent?: boolean;
}
const CardMaker = (props: ICardMakerProps) => {
  const {
    color = "transparent",
    title,
    alt,
    outline,
    imgSrc,
    className,
    inverse = true,
    body,
    subTitle,
    cardText,
    button,
    children,
    cardBodyContent = false,
    cardBodyClassName,
    CardHeaderClassName,
    border = 0,
    ...rest
  } = props;
  return (
    <Card
      color={color}
      outline={outline}
      className={className}
      inverse={inverse}
      body={body}
      style={{ border: border }}
      {...rest}
    >
      {imgSrc && <ImageViewer alt={alt ?? ""} src={imgSrc} />}

      {cardBodyContent && (
        <CardBody className={cardBodyClassName}>
          {title && <CardTitle>{title}</CardTitle>}
          {subTitle && (
            <CardSubtitle className="mb-2  ">{subTitle}</CardSubtitle>
          )}
          {cardText && <CardText>{cardText}</CardText>}

          {button && button}
        </CardBody>
      )}

      {children}
    </Card>
  );
};

export default CardMaker;
