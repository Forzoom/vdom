interface CreateElementLogItem {
    type: 'createElement';
    args: [ string ];
    elm: Node;
}
interface CreateCommentLogItem {
    type: 'createComment';
    args: [ string ];
    elm: Node;
}
interface CreateTextNodeLogItem {
    type: 'createTextNode';
    args: [ string ];
    elm: Node;
}
interface InsertBeforeLogItem {
    type: 'insertBefore';
    args: [ Node, Node, Node ];
}
interface RemoveChildLogItem {
    type: 'removeChild';
    args: [ Node, Node ];
}
interface AppendChildLogItem {
    type: 'appendChild';
    args: [ Node, Node ];
}
interface SetTextContentLogItem {
    type: 'setTextContent';
    args: [ Node, string ];
}
type LogItem = CreateElementLogItem | CreateCommentLogItem | CreateTextNodeLogItem | InsertBeforeLogItem
    | RemoveChildLogItem | AppendChildLogItem | SetTextContentLogItem;

//  | 'insertBefore' | 'removeChild' | 'appendChild' | 'setTextContent'
