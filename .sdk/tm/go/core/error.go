package core

type UvIndexError struct {
	IsUvIndexError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUvIndexError(code string, msg string, ctx *Context) *UvIndexError {
	return &UvIndexError{
		IsUvIndexError: true,
		Sdk:              "UvIndex",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UvIndexError) Error() string {
	return e.Msg
}
