"use client";
import React from "react";
import { Col, Input, Row } from "reactstrap";
import { BackButton, ButtonMaker, ImageViewer } from "@components";

const User = () => {
  return (
    <React.Fragment>
      <BackButton block={false} />
      <Row>
        <Col md={3}>
          <div className="p-3 rounded bg-secondary">
            <ImageViewer
              src="/images/sidebar/avatar.png"
              fill
              className="mb-3 rounded"
            />
            <p>John doe</p>
          </div>
        </Col>
        <Col md={9}>
          <div className="add_product bg-secondary p-3 rounded">
            <form>
              <Row>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <Input
                      type="text"
                      name="userName"
                      className="form-control"
                      placeholder="userName"
                      required
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <Input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <Input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      required
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <Input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="phone"
                      required
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <textarea
                      name="desc"
                      id="desc"
                      className="form-control"
                      placeholder="address"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <select className="form-select" name="admin" id="admin">
                      <option value="general">Is Admin ? </option>

                      <option value="no">Yes</option>
                      <option value="yes">No</option>
                    </select>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="mb-3 mb-lg-4">
                    <select className="form-select" name="active" id="active">
                      <option value="general">Is Active ? </option>

                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </Col>

                <Col md={12}>
                  <div className="text-end">
                    <ButtonMaker
                      block
                      type="submit"
                      className="btn btn-success py-2 text-white"
                    >
                      Edit{" "}
                    </ButtonMaker>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default User;
