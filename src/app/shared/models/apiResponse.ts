export class ApiResponse<T> {
  public data: T;
  public code: number;
  public errorMessage: string;
  public errorDetails: string;
  public get hasData(): boolean {
    return this.data !== undefined || this.data !== null;
  }
}
