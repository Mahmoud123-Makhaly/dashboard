"use client";
import React from "react";
import { Col, Input, Row } from "reactstrap";
import { BackButton, ButtonMaker } from "@components";

const AddProducts = () => {
  return (
    <div className="add_product bg-secondary p-3 rounded">
      <BackButton />
      <form>
        <Row>
          <Col md={6}>
            <div className="mb-3 mb-lg-4">
              <Input
                type="text"
                name="title"
                className="form-control"
                placeholder="title"
                required
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3 mb-lg-4">
              <select className="form-select" name="category" id="category">
                <option value="general">Choose Category...</option>

                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
              </select>
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3 mb-lg-4">
              <Input
                type="number"
                className="form-control"
                placeholder="price"
                name="price"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3 mb-lg-4">
              <Input
                type="text"
                className="form-control"
                name="stock"
                placeholder="stock"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-">
              <Input
                type="text"
                name="color"
                className="form-control"
                placeholder="color"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3 mb-lg-4">
              <Input
                type="text"
                className="form-control"
                name="size"
                placeholder="size"
              />
            </div>
          </Col>
          <Col md={12}>
            <div className="mb-3 mb-lg-4">
              <textarea
                name="desc"
                id="desc"
                rows={8}
                className="form-control"
                placeholder="Description"
              />
            </div>
          </Col>

          <Col md={12}>
            <div className="text-end">
              <ButtonMaker
                block
                type="submit"
                className="btn btn-success py-2 text-white"
              >
                Submit
              </ButtonMaker>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddProducts;
