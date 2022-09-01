namespace ReactHooksDemoBackend.Dto;

public class ListResponseDto<T> : ResponseDtoBase
{
    public List<T> Data { get; set; }
}
