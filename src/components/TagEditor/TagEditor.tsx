import React, { useState, useEffect } from "react";
import TagEditorBase, { TagEditorProps } from "@cloudscape-design/components/tag-editor";
/**
 * @uxpindocurl https://cloudscape.design/components/tag-editor/
 * @uxpindescription An extension of the attribute editor built with integrated logic. With the tag editor, users can create, edit, or delete resource tags.
 */
/**
 * Extended TagEditorProps to include keysRequestValues, valuesRequestValues, and tags as props
 */
interface ExtendedTagEditorProps extends TagEditorProps {
  keysRequestValues?: string[]; // Optional array of keys
  valuesRequestValues?: string[]; // Optional array of values
  tags?: { key: string; value: string; existing: boolean }[]; // Allow passing `tags` as a prop
}

const TagEditor = (props: ExtendedTagEditorProps) => {
  const [tags, setTags] = useState<{ key: string; value: string; existing: boolean }[]>(props.tags ?? []);

  useEffect(() => {
    if (props.tags) {
      setTags(props.tags);
    }
  }, [props.tags]);

  return (
    <TagEditorBase
      {...props}
      i18nStrings={{
        addButton: "Add new tag",
        removeButton: "Remove",
        tagLimit: (availableTags, tagLimit) =>
          availableTags === tagLimit
            ? `You can add up to ${tagLimit} tags.`
            : availableTags === 1
              ? "You can add up to 1 more tag."
              : `You can add up to ${availableTags} more tags.`,
      }}
      tags={tags}
      onChange={({ detail }) => setTags([...detail.tags])}

      keysRequest={() =>
        props.keysRequestValues
          ? Promise.resolve(props.keysRequestValues)
          : Promise.resolve([])
      }

      valuesRequest={(key) =>
        key
          ? Promise.resolve(props.valuesRequestValues ?? [])
          : Promise.reject()
      }
    />
  );
};

export default TagEditor;
