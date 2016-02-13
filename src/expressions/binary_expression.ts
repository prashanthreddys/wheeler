import {IExpression} from './iexpression';
import {IExpressionVisitor} from './iexpression_visitor';

export class BinaryExpression implements IExpression, IODataOperator {
    public operator: string;
    private left: IExpression;
    private right: IExpression;

    constructor(left: IExpression, right: IExpression) {
        this.left = left;
        this.right = right;
    }

    public accept(v: IExpressionVisitor): void {
        if (this.left) {
            this.left.accept(v);
        }

        if (this.right) {
            this.right.accept(v);
        }

        v.visit(this);
    }
}