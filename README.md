# 🍜 tokisoba

![License](https://img.shields.io/github/license/nandenjin/tokisoba?style=flat-square)
![CI Status](https://img.shields.io/github/actions/workflow/status/nandenjin/tokisoba/push.yaml?style=flat-square)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/nandenjin/tokisoba?style=flat-square&logo=codeclimate)
](https://codeclimate.com/github/nandenjin/tokisoba/maintainability)

Interactive countdown badge generator with `shields.io`. [Try it out](https://nandenjin.github.io/tokisoba/)

## Example

- Countdown for `2024-10-26`: ![](https://img.shields.io/endpoint?url=https%3A%2F%2Ftokisoba.nandenjin.com%2Fv1%2Fendpoint%3Ft%3D2024-10-26T00%3A00&style=flat-square)

## Usage

### `/v1/endpoint`

Returns countdown badge params for [shield.io Endpoint Badge](https://shields.io/badges/endpoint-badge).

#### Params

| Key | Example | Description |
|:---:|:---:|:---:|
| `t` | `2023-12-31T12:00` | Target datetime | 

Note that you can customize styles or icons of badge via [params from shields.io](https://shields.io/badges/endpoint-badge).

### Response

`https://tokisoba.nandenjin.com/v1/endpoint?t=2023-12-31T12:00` ([Try live](https://tokisoba.nandenjin.com/v1/endpoint?t=2023-12-31T12:00))

```json
{
  "schemaVersion": 1,
  "label": "",
  "message": "2m",
  "color": "blue"
}
```

Passing it to [shields.io](https://shields.io/badges/endpoint-badge): `https://img.shields.io/endpoint?url=https%3A%2F%2Ftokisoba.nandenjin.com%2Fv1%2Fendpoint%3Ft%3D2023-12-31T00%3A00`

![](https://img.shields.io/endpoint?url=https%3A%2F%2Ftokisoba.nandenjin.com%2Fv1%2Fendpoint%3Ft%3D2023-12-31T00%3A00)
