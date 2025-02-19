import * as React from "react";
import BoardM, { BoardProps } from "@cloudscape-design/board-components/board";
import BoardItem from "@cloudscape-design/board-components/board-item";
import Header from "@cloudscape-design/components/header";
/**
 * @uxpindocurl https://cloudscape.design/components/board/
 * @uxpindescription Provides the base for a configurable layout, including drag and drop, responsiveness and grid.
 */
// Define your own type for the item expected in renderItem
interface ItemType {
    id: string;
    rowSpan?: number;
    columnSpan?: number;
    data: {
        title: string;
        content: string;
    };
}

const Board = (props: BoardProps & { items?: ItemType[] }) => {
    const [items, setItems] = React.useState<ItemType[]>(props.items || []); // Initialize with props.items

    // Update local items state when props.items changes
    React.useEffect(() => {
        if (props.items) {
            setItems(props.items);
        }
    }, [props.items]);

    const i18nStrings = {
        dragHandleAriaLabel: "Drag handle",
        dragHandleAriaDescription:
            "Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard.",
        resizeHandleAriaLabel: "Resize handle",
        resizeHandleAriaDescription:
            "Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard.",
        liveAnnouncementDndStarted: (operationType: string) =>
            operationType === "resize" ? "Resizing" : "Dragging",
        liveAnnouncementDndItemReordered: (operation: any) => {
            const columns = `column ${operation.placement.x + 1}`;
            const rows = `row ${operation.placement.y + 1}`;
            return createAnnouncement(
                `Item moved to ${operation.direction === "horizontal" ? columns : rows}.`,
                operation.conflicts,
                operation.disturbed
            );
        },
        liveAnnouncementDndItemResized: (operation: any) => {
            const columnsConstraint = operation.isMinimalColumnsReached
                ? " (minimal)"
                : "";
            const rowsConstraint = operation.isMinimalRowsReached
                ? " (minimal)"
                : "";
            const sizeAnnouncement =
                operation.direction === "horizontal"
                    ? `columns ${operation.placement.width}${columnsConstraint}`
                    : `rows ${operation.placement.height}${rowsConstraint}`;
            return createAnnouncement(
                `Item resized to ${sizeAnnouncement}.`,
                operation.conflicts,
                operation.disturbed
            );
        },
        liveAnnouncementDndItemInserted: (operation: any) => {
            const columns = `column ${operation.placement.x + 1}`;
            const rows = `row ${operation.placement.y + 1}`;
            return createAnnouncement(
                `Item inserted to ${columns}, ${rows}.`,
                operation.conflicts,
                operation.disturbed
            );
        },
        liveAnnouncementDndCommitted: (operationType: string) =>
            `${operationType} committed`,
        liveAnnouncementDndDiscarded: (operationType: string) =>
            `${operationType} discarded`,
        liveAnnouncementItemRemoved: (op: any) =>
            createAnnouncement(
                `Removed item ${op.item.data.title}.`,
                [],
                op.disturbed
            ),
        navigationAriaLabel: "Board navigation",
        navigationAriaDescription:
            "Click on non-empty item to move focus over",
        navigationItemAriaLabel: (item: ItemType | null) => item ? item.data.title : "Empty"
    };

    const createAnnouncement = (operationAnnouncement: string, conflicts: { data: { title: string } }[], disturbed: any[]) => {
        const conflictsAnnouncement = conflicts.length > 0
            ? `Conflicts with ${conflicts.map(c => c.data.title).join(", ")}.`
            : "";
        const disturbedAnnouncement = disturbed.length > 0
            ? `Disturbed ${disturbed.length} items.`
            : "";
        return [operationAnnouncement, conflictsAnnouncement, disturbedAnnouncement]
            .filter(Boolean)
            .join(" ");
    };

    return (
        <BoardM
            {...props}
            empty={props.empty}
            renderItem={(item: ItemType) => (
                <BoardItem
                    header={<Header>{item.data.title}</Header>}
                    i18nStrings={i18nStrings}
                >
                    {item.data.content}
                </BoardItem>
            )}
            onItemsChange={(event: any) => setItems([...event.detail.items])} // Spread operator to create a mutable array
            items={items}
            i18nStrings={i18nStrings}
        />
    );
};

export default Board;
